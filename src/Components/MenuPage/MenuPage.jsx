import React from 'react'
import './MenuPage.css'
import logos from '../../Image/logo1.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GrFormSearch } from 'react-icons/gr';
const MenuPage = () => {
  const { pizzas } = useSelector((storeData) => {
    return storeData
  })
  return (
    <div className='MenuPage'>
      <div className="navbar">
        <div className="img">

          <img src={logos} alt="" />
        </div>
        <div className="middlediv">
          <Link to="/"><p>Home</p></Link>
          <p>Pages</p>
          <p>Menu</p>
          <p>Events</p>
          <p>Blogs</p>
        </div>
        <div className="leftdiv">
          <p>Cart</p>
          <p><GrFormSearch /> <span>Search</span>
          </p>
          <button>ORDER ONLINE</button>
        </div>
      </div>
      <div className="mainmenu">

      <div className="menulight">
        <p>CHOOSE YOUR FAVORITE</p>
        <h2>MENU LIGHT</h2>
      </div>
      <div className="menus">
      {pizzas.map((ele) => {
            return (
              <>
                <div className="menuscard">
                  <img src={ele && ele.linkImagen} alt="" />
                  <div className="name">

                    <p>{ele && ele.nombre}</p>
                  </div>
                  <div className="price">

                    <p><span>$ {ele && ele.precio}</span></p>
                  </div>
                 
                </div>
              </>
            )
          })
          }
      </div>
      </div>
    </div>
  )
}

export default MenuPage