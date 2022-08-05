import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import AracListesi from './AracListesi';
import AracDetay from './AracDetay';
import Clio from "./resimler/clio.jpeg"
import Aegea from "./resimler/aegea.jpeg"
import Cclass from "./resimler/cclass.jpg"
import X5 from "./resimler/x5.jpg"
import Passat from "./resimler/passat.jpg"
import "../index.css"


export default class Araclar extends Component {
    state = {
        selectedCar: {},
        cars: [
            {
                carId: 1,
                name: "Renault Clio",
                color: "Mavi",
                model: "2021",
                kW: "90kW",
                yakit: "Benzin",
                sanzuman: "Otomatik",
                limitKm: "100km",
                fiyat: "300TL",
                resim: Clio
            },
            {
                carId: 2,
                name: "Fiat Aegea",
                color: "Siyah",
                model: "2021",
                kW: "95kW",
                yakit: "Dizel",
                sanzuman: "Manuel",
                limitKm: "120km",
                fiyat: "350TL",
                resim: Aegea
            },
            {
                carId: 3,
                name: "Mercedes C Class",
                color: "Mavi",
                model: "2022",
                kW: "110kW",
                yakit: "Dizel",
                sanzuman: "Otomatik",
                limitKm: "200km",
                fiyat: "500TL",
                resim: Cclass
            },
            {
                carId: 4,
                name: "BMW X5",
                color: "Beyaz",
                model: "2019",
                kW: "120kW",
                yakit: "Benzin",
                sanzuman: "Otomatik",
                limitKm: "200km",
                fiyat: "600TL",
                resim: X5
            },
            {
                carId: 5,
                name: "VW Passat",
                color: "Siyah",
                model: "2018",
                kW: "100kW",
                yakit: "Dizel",
                sanzuman: "Manuel",
                limitKm: "250km",
                fiyat: "400TL",
                resim: Passat
            }
        ]
    }

    changeState = (e) => {
        //e.preventDefault();
        console.log("changeState calisti" + e);
    }

    changeCar = (arac) => {
        // console.log("Change Car Çalıştı " + arac.name + " " + arac.color)
        this.setState({ selectedCar: arac });
    }

    render() {
        return (
            <Row className='mx-1'>
                <Col className='col-md-6' id="listCol">
                    <h4 >Arac Listesi</h4>
                    <AracListesi cars={this.state.cars} changeSelected={this.changeCar} />
                </Col>
                <Col className='col-md-6' id="detayCol">
                    <h4>Arac Detay</h4>
                    <AracDetay currentCar={this.state.selectedCar} changeRented={this.changeState} />
                </Col>
            </Row>
        )
    }
}
