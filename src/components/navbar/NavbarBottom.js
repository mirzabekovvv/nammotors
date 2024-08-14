import React from 'react'

function NavbarBottom() {


  const data = [
    "Tel: +998 99 366 62 35  .  +998 90 222 48 60",
    "Usta:  +998 00 000 00 00   +998 00 000 00 00",
    "Manzil: Namangan viloyat Toshbuloq ",
    "Dokon: Toshkent Olmazor",
  ]

  return (
    <div className='navbar-bottom container'>
      {
        data.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })
      }
    </div>
  )
}

export default NavbarBottom