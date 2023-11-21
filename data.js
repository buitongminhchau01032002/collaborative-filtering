/*
Nhóm User 1:
 - nam_tran
 - ngoc_nguyen
 - minh_le
 - tuan_do
Nhóm User 2:
 - quang_nguyen
 - mai_tran
 - thanh_nguyen
 - hong_le
Nhóm User 3:
 - tuan_truong
 - anh_vu
 - hoang_nguyen
 - linh_tran
Nhóm Sản Phẩm 1 (Quần Áo):
 - ao_phong_trang
 - quan_jeans_den
 - ao_thun_hoa_tiet
 - ao_so_mi_xanh
 - ao_phong_den
 - quan_jeans_xanh
 - ao_so_mi_trang
Nhóm Sản Phẩm 2 (Giày Dép):
 - giay_the_thao
 - giay_the_thao_trang
 - giay_nike
 - giay_the_thao_xanh
 - giay_da_bong_xanh
 - giay_da_bong_do
 - giay_chay_bo
Nhóm Sản Phẩm 3 (Phụ Kiện):
 - balo_nho
 - tui_xach
 - khan_quang_cao
 - non_snapback
 - balo_hoc
 - nhan_vang
 - tui_xach_to
*/
const data = [
    { user: 'nam_tran', item: 'ao_phong_trang', rating: 5 },
    { user: 'nam_tran', item: 'quan_jeans_den', rating: 4 },
    { user: 'nam_tran', item: 'quan_jeans_xanh', rating: 5 },
    { user: 'nam_tran', item: 'giay_the_thao_trang', rating: 3 },
    { user: 'nam_tran', item: 'tui_xach_to', rating: 2 },
    { user: 'nam_tran', item: 'nhan_vang', rating: 3 },
    { user: 'minh_le', item: 'ao_phong_trang', rating: 5 },
    { user: 'minh_le', item: 'ao_so_mi_xanh', rating: 4 },
    { user: 'minh_le', item: 'quan_jeans_xanh', rating: 4 },
    { user: 'minh_le', item: 'balo_nho', rating: 3 },
    { user: 'minh_le', item: 'giay_da_bong_xanh', rating: 2 },
    { user: 'tuan_do', item: 'ao_so_mi_xanh', rating: 5 },
    { user: 'tuan_do', item: 'ao_phong_trang', rating: 4 },
    { user: 'tuan_do', item: 'quan_jeans_xanh', rating: 4 },
    { user: 'tuan_do', item: 'khan_quang_cao', rating: 2 },
    { user: 'ngoc_nguyen', item: 'ao_thun_hoa_tiet', rating: 3 },
    { user: 'ngoc_nguyen', item: 'ao_phong_den', rating: 4 },
    { user: 'ngoc_nguyen', item: 'quan_jeans_den', rating: 5 },
    { user: 'ngoc_nguyen', item: 'non_snapback', rating: 2 },

    { user: 'quang_nguyen', item: 'giay_the_thao_trang', rating: 5 },
    { user: 'quang_nguyen', item: 'giay_the_thao_xanh', rating: 5 },
    { user: 'quang_nguyen', item: 'giay_chay_bo', rating: 5 },
    { user: 'quang_nguyen', item: 'tui_xach', rating: 3 },
    { user: 'quang_nguyen', item: 'ao_phong_trang', rating: 2 },
    { user: 'mai_tran', item: 'giay_the_thao_trang', rating: 3 },
    { user: 'mai_tran', item: 'giay_da_bong_xanh', rating: 3 },
    { user: 'mai_tran', item: 'giay_chay_bo', rating: 4 },
    { user: 'mai_tran', item: 'balo_nho', rating: 1 },
    { user: 'mai_tran', item: 'quan_jeans_den', rating: 1 },
    { user: 'thanh_nguyen', item: 'giay_da_bong_xanh', rating: 5 },
    { user: 'thanh_nguyen', item: 'giay_da_bong_do', rating: 3 },
    { user: 'thanh_nguyen', item: 'giay_chay_bo', rating: 4 },
    { user: 'thanh_nguyen', item: 'khan_quang_cao', rating: 2 },
    { user: 'thanh_nguyen', item: 'quan_jeans_den', rating: 1 },
    { user: 'thanh_nguyen', item: 'non_snapback', rating: 2 },
    { user: 'hong_le', item: 'giay_nike', rating: 3 },
    { user: 'hong_le', item: 'giay_the_thao_xanh', rating: 3 },
    { user: 'hong_le', item: 'giay_the_thao', rating: 4 },
    { user: 'hong_le', item: 'non_snapback', rating: 1 },
    { user: 'hong_le', item: 'khan_quang_cao', rating: 1 },
    { user: 'tuan_truong', item: 'tui_xach', rating: 5 },
    { user: 'tuan_truong', item: 'khan_quang_cao', rating: 4 },
    { user: 'tuan_truong', item: 'non_snapback', rating: 5 },
    { user: 'tuan_truong', item: 'giay_the_thao', rating: 2 },
    { user: 'tuan_truong', item: 'ao_phong_den', rating: 2 },

    { user: 'anh_vu', item: 'tui_xach', rating: 5 },
    { user: 'anh_vu', item: 'tui_xach_to', rating: 3 },
    { user: 'anh_vu', item: 'balo_nho', rating: 3 },
    { user: 'anh_vu', item: 'giay_chay_bo', rating: 1 },
    { user: 'anh_vu', item: 'quan_jeans_xanh', rating: 2 },
    { user: 'anh_vu', item: 'ao_phong_den', rating: 1 },
    { user: 'hoang_nguyen', item: 'balo_nho', rating: 5 },
    { user: 'hoang_nguyen', item: 'balo_hoc', rating: 5 },
    { user: 'hoang_nguyen', item: 'non_snapback', rating: 4 },
    { user: 'hoang_nguyen', item: 'ao_so_mi_trang', rating: 2 },
    { user: 'hoang_nguyen', item: 'quan_jeans_den', rating: 3 },
    { user: 'hoang_nguyen', item: 'ao_so_mi_trang', rating: 2 },
    { user: 'linh_tran', item: 'nhan_vang', rating: 3 },
    { user: 'linh_tran', item: 'tui_xach_to', rating: 4 },
    { user: 'linh_tran', item: 'khan_quang_cao', rating: 4 },
    { user: 'linh_tran', item: 'ao_so_mi_xanh', rating: 1 },
    { user: 'linh_tran', item: 'giay_nike', rating: 1 },

    { user: 'a', item: 'bun_dau', rating: 5 },
    { user: 'a', item: 'nuoc_mam', rating: 5 },
    { user: 'a', item: 'mam_tom', rating: 1 },

    { user: 'b', item: 'bun_dau', rating: 5 },
    { user: 'b', item: 'mam_tom', rating: 1 },
];

export { data };
