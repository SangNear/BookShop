import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        img: "https://product.hstatic.net/200000287623/product/sau-gio-hoc_6207c2a5bd424e058d3f990037a1d945_master.jpg",
        name:"sau giờ học",
        price: 65000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/thu_4961ee1cad044ffaaf3e4888757809e6_master.jpg",
        name:"thư",
        price: 65000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/hinh_canh_mat_tri_-_bia1_2262bb99f94a471987133299366fe435_master.jpg",
        name:"hình cảnh mất trí",
        price: 65000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/nguoi_trong_luoi_20b258d487104ac6a1d9859db5bbeed4_master.jpg",
        name:"Người Trong Lưới",
        price: 154000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/canh-ky-lan-bia_a998df85b0e74e5696669ca5bc372b9b_master.jpg",
        name:"Cánh Kỳ Lân",
        price: 118000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/mo-dom-dom_b4e28f878027496bbfc794e0c65fc89a_master.jpg",
        name:"Mộ Đom Đóm",
        price: 96000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/dao-buoc-pho-dem_89535002026b4bf7bd64b509d85cfaed_master.jpg",
        name:"Dạo Bước Phố Đêm",
        price: 68000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/dung_hen_ngay_mai_a30905c1fce3472687bdae1435339f97_master.jpg",
        name:"Đừng Hẹn Ngày Mai",
        price: 118000
      },
      {
        img: "https://product.hstatic.net/200000287623/product/am-duong-su_515b15b9ec40485eaba3ebeefc31770b_master.jpg",
        name:"Âm Dương Sư",
        price: 174000
      },
    ]
  }
}
