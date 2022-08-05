import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import "../index.css"

export default class TopNavBar extends Component {
  render() {
    return (

      <Navbar className='nav-bar1'>

        <NavbarBrand className='mx-auto'>
          <h1>Best Rent-A-Car &nbsp; &nbsp;&nbsp;Üsküdar/Istanbul&nbsp; &nbsp; &nbsp;Tel: 0555 111 22 33</h1>
        </NavbarBrand>
      </Navbar>
    )

  }
}


// import { Navbar, NavbarBrand, NavLink } from 'reactstrap'
// import Logo from '../logo.png'

// export default class TopNavBar extends Component {
//   render() {
//     return (
//       <Navbar>
//         <NavbarBrand>
//           <img src={Logo} className="logo" />
//         </NavbarBrand>
//         <NavLink href="/">Dashboard</NavLink>
//         <NavLink href="/customers" >Müşteri Listesi</NavLink>
//         <NavLink href="/new-customer" >Yeni Müşteri</NavLink>
//       </Navbar>
//     )
//   }
// }