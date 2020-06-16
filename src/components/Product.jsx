import React from 'react';
import Produk1 from '../assets/images/donate1.jpg';


function Product() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-7 ">
                    <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">

                        <div className="carousel-inner">
                            <div className="carousel-item active"> <img src="https://gomuslim.co.id/images/post/551berbagi-buka.jpg" alt="Hills" /> </div>
                            <div className="carousel-item"> <img src="https://cdn2.tstatic.net/surabaya/foto/bank/images/4-inspirasi-takjil-untuk-buka-puasa-ramadhan-praktis-dan-mudah-dibuat-di-rumah.jpg" alt="Hills" /> </div>
                            <div className="carousel-item"> <img src="https://raw.cdn.baca.co.id/f9f13559-2e0a-4a25-897e-51997643d535" alt="Hills" /> </div>
                            <div className="carousel-item"> <img src="https://cdn0-production-images-kly.akamaized.net/m2WftEgdchSs_eqCSmodqYFiL6E=/1231x710/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3118637/original/022589700_1588565532-20200405-Aksi-Relawan-Pakistan-Berbagi-Makanan-Buka-Puasa-1.jpg" alt="Hills" /> </div>
                        </div>

                        <ol className="carousel-indicators list-inline">
                            <li className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src="https://gomuslim.co.id/images/post/551berbagi-buka.jpg" className="img-fluid" /> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="https://cdn2.tstatic.net/surabaya/foto/bank/images/4-inspirasi-takjil-untuk-buka-puasa-ramadhan-praktis-dan-mudah-dibuat-di-rumah.jpg" className="img-fluid" /> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="https://raw.cdn.baca.co.id/f9f13559-2e0a-4a25-897e-51997643d535" className="img-fluid" /> </a> </li>
                            <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="https://cdn0-production-images-kly.akamaized.net/m2WftEgdchSs_eqCSmodqYFiL6E=/1231x710/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3118637/original/022589700_1588565532-20200405-Aksi-Relawan-Pakistan-Berbagi-Makanan-Buka-Puasa-1.jpg" className="img-fluid" /> </a> </li>
                        </ol>
                    </div>

                </div>



                <div className="col-5 px-1">
                    <h3>Makanan berbuka dan sahur untuk Tunawisma</h3>
                    <label class="badge badge-primary py-2">
                        <span className="pb-2 align-middle">Sambung Rasa</span>
                    </label>
                    <p className="text-muted"><i class="fas fa-map-marker-alt"></i> Sleman</p>

                    <div className="card">
                        <p className="text-donasi">Dana terkumpul</p>
                        <p className="duit-donasi">Rp.4.000.000</p>
                        <hr />
                        <div className="row">
                            <div className="col-5">
                                <p className="waktu">Waktu</p><h5 className="text-hari">25 hari lagi</h5></div>
                            <div className="col-7 text-right">
                                <p className="partisipan">Berpartisipasi</p><h5 className="text-jumlah">388</h5></div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger">DONASI</button>
                    <button type="button" className="button-share"><i className="material-icons">share</i>   BAGIKAN</button>
                </div>
            </div>
        </div>

    )
}



export default Product;