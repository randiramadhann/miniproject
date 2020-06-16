import React, { Component } from 'react';
import NavbarUpdate from "../components/NavbarUpdate";
import Product from "../components/Product.jsx";
import landingPage from '../json/landingPage.json';

export default class UpdateActivityPage extends Component {
    render() {
        return (
            <>

                <Product {...this.props}></Product>
                <NavbarUpdate {...this.props}></NavbarUpdate>


                <div className="container mt-4 mb-4">
                    <div className="card" >
                        <div className="card-body card-activity">
                            <h6 className="card-title">Rabu, 10 Juni 2020</h6>
                            <img style={{ height: 324 }} className="card-img" src="https://www.paramount-land.com/wp-content/uploads/2017/03/Dummy-Header.jpg" alt="Card image" />
                            <div className="card-text ">
                                <ol className="1 mt-4">
                                    <li>
                                    Kali ini bantuan datang dari Asosiasi Pesepak Bola Profesional Indonesia ( APPI) yang memberi bantuan berupa 1.500 alat pelindung diri (APD) melalui Badan Nasional Penanggulangan Bencana ( BNPB). Pemberian donasi dilakukan di kantor BNPB, Jakarta Timur, pada Senin (15/6/2020). Donasi dari APPI diterima oleh Deputi Bidang Logistik dan Peralatan BNPB, Prasinta Dewi. Berdasarkan rilis APPI yang diterima Kompas.com, donasi berupa ribuan APD itu akan diteruskan kepada Gugus Tugas Percepatan Penanganan Covid-19 yang berada di bawah BNPB.
Artikel ini telah tayang di Kompas.com dengan judul "Bantu Penanganan Covid-19, APPI Donasikan 1.500 APD untuk Petugas Medis", https://bola.kompas.com/read/2020/06/16/06400078/bantu-penanganan-covid-19-appi-donasikan-1.500-apd-untuk-petugas-medis.
Penulis : Benediktus Agya Pradipta
Editor : Tri Indriawati
<br />
<br />
<br />
<img style={{ height: 324 }} className="card-img" src="https://www.paramount-land.com/wp-content/uploads/2017/03/Dummy-Header.jpg" alt="Card image" />
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}
