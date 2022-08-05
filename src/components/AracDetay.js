import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row, Button } from 'reactstrap'

export default class AracDetay extends Component {
    render() {
        return (
            <>
                {/* <div>Arac Detay</div> */}
                <Card className='mb-3'>
                    <CardHeader>
                        {this.props.currentCar.name} - Kod: {this.props.currentCar.carId}
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col className='col-md-6'>
                                <p>Renk: {this.props.currentCar.color}</p>
                                <p>Model Yili: {this.props.currentCar.model}</p>
                                <p>Gücü: {this.props.currentCar.kW}</p>
                                <p>Yakit: {this.props.currentCar.yakit}</p>
                                <p>Sanzuman: {this.props.currentCar.sanzuman}</p>
                                <p>Günlük kilometre limiti: {this.props.currentCar.limitKm}</p>
                                <p>Günlük kira bedeli: {this.props.currentCar.fiyat}</p>
                                <div>
                                    <Button
                                        color="success" onClick={this.props.changeRented(this.value)}
                                    >
                                        Kirala
                                    </Button>
                                </div>
                            </Col >
                        </Row>
                    </CardBody>
                </Card>
            </>
        )
    }
}

{/* <tr key={c.carId} onClick={() => this.props.changeSelected(c)}></tr> */ }