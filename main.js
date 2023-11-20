import { data } from './data.js';

function getUserRatings(data = []) {
    const userRatings = {};
    data.forEach((record) => {
        const { user, item, rating } = record;

        if (!userRatings[user]) {
            userRatings[user] = {};
        }

        userRatings[user][item] = rating;
    });

    return userRatings;
}

function getNormalizedRatings(userRatings) {
    const userRatingsNormalized = {};
    Object.keys(userRatings).forEach((user) => {
        const ratings = Object.values(userRatings[user]); // [item1: 5, item2: 3]
        const avgRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
        userRatingsNormalized[user] = {};
        Object.keys(userRatings[user]).forEach((item) => {
            userRatingsNormalized[user][item] = userRatings[user][item] - avgRating;
        });
    });
    return userRatingsNormalized;
}

function getUserSimilarities(userRatingsNormalized, targetUser) {
    const userSimilarities = {};
    Object.keys(userRatingsNormalized).forEach((user) => {
        if (user !== targetUser) {
            userSimilarities[user] = cosineSimilarity(
                userRatingsNormalized[user],
                userRatingsNormalized[targetUser]
            );
        }
    });

    return userSimilarities;
}

function cosineSimilarity(u1, u2) {
    let dotProduct = 0;
    Object.keys(u1).forEach((item) => {
        if (u2[item]) {
            dotProduct += u1[item] * u2[item];
        }
    });
    const length1 = Math.sqrt(Object.keys(u1).reduce((acc, curr) => acc + u1[curr] ** 2, 0));
    const length2 = Math.sqrt(Object.keys(u2).reduce((acc, curr) => acc + u2[curr] ** 2, 0));
    return dotProduct / (length1 * length2);
}

function findUnratedItems(data, userRatings, user) {
    const unratedItems = [];
    const items = [...new Set(data.map((record) => record.item))];

    items.forEach((item) => {
        if (userRatings[user][item] === undefined) {
            unratedItems.push(item);
        }
    });

    return unratedItems;
}

function getRatingPredictions(data, normalizedRatings, userSimilarities, targetUser, n) {
    const ratingPredictions = [];
    const unratedItems = findUnratedItems(data, normalizedRatings, targetUser);
    unratedItems.forEach((unratedItem) => {
        const y = calcRatingPrediction(normalizedRatings, userSimilarities, n, unratedItem);
        ratingPredictions.push({ item: unratedItem, ratingPrediction: y });
    });
    return ratingPredictions.sort((a, b) => b.ratingPrediction - a.ratingPrediction);
}

function calcRatingPrediction(normalizedRatings, userSimilarities, n, item) {
    // get users rating
    const userRatedSimilarities = [];
    Object.keys(normalizedRatings).forEach((user) => {
        if (normalizedRatings[user][item] !== undefined) {
            userRatedSimilarities.push({
                user,
                similarity: userSimilarities[user],
            });
        }
    });
    userRatedSimilarities.sort((a, b) => b.similarity - a.similarity);

    let a = 0;
    let b = 0;
    userRatedSimilarities.slice(0, n).forEach((userSimilarity) => {
        if (userSimilarity.similarity > 0) {
            a += userSimilarity.similarity * normalizedRatings[userSimilarity.user][item];
            b += Math.abs(userSimilarity.similarity);
        }
    });

    if (b === 0) return 0;

    return a / b;
}

const userRatings = getUserRatings(data);
const normalizedRatings = getNormalizedRatings(userRatings);
const userSimilarities = getUserSimilarities(normalizedRatings, 'thanh_nguyen');
const ratingPredictions = getRatingPredictions(
    data,
    normalizedRatings,
    userSimilarities,
    'thanh_nguyen',
    2
);
console.log(ratingPredictions);

// Ví dụ sử dụng
// const targetUser = 'nam_tran';
// const recommendedItems = collaborativeFilteringNormalized(data, targetUser);

// console.log(`Recommended items for ${targetUser}:`, recommendedItems);
