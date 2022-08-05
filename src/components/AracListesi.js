import React, { Component } from "react";
import { Row, Table } from 'reactstrap'
import Bootstrap from "bootstrap"
import "../index.css"



export default class AracListesi extends Component {
    render() {
        return (
            <>
                <Row>
                    <Table bordered hover striped>
                        <tbody>
                            {
                                this.props.cars?.map(c => (
                                    <tr key={c.carId} onClick={() => this.props.changeSelected(c)}>
                                        <td>{<img src={c.resim} />}</td>
                                        <td className="carName">{c.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </>
        )
    }
}