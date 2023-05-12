import React, { useEffect } from 'react'
import "./HomePage.css"
import NavBar from '../NavBar/NavBar'
// import image from '../../Image/donpeppe-home.png'
import logos from '../../Image/donpeppe-home.png'
import tags from '../../Image/tags.png'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const HomePage = () => {
  const dispatch = useDispatch();


  const { pizzas } = useSelector((storeData) => {
    return storeData
  })
  useEffect(() => {
    async function pizzaData() {
      const url = 'https://pizzaallapala.p.rapidapi.com/productos';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5b29106a64mshc21fabcc1e33f91p12248ejsna2c8cd4860bd',
          'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
      };

      try {
        if (pizzas.length === 0) {
          fetch(
            url, options
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              dispatch({
                type: "products",
                payload: data.productos
              })
            })
        }

        //   const response = await fetch(url, options);
        //   const result = await response.json();
        //   console.log(result.productos);
        //   dispatch({
        //     type: "pizza",
        //     payload: result.productos
        // })
      } catch (error) {
        console.error(error);
      }
    }
    pizzaData()
  }, [])

  return (
    <div className='HomePage'>
      <NavBar />
      <div className="pizzas">
        <img src={logos} alt="" />
        <div className="main">
          <div className="img">
            <img src={tags} alt="" />
          </div>

          {pizzas.map((ele) => {
            return (
              <>
                <div className="card">
                  <img src={ele && ele.linkImagen} alt="" />
                  <div className="name">

                    <p>{ele && ele.nombre}</p>
                  </div>
                  <div className="price">

                    <p><span>$ {ele && ele.precio}</span></p>
                  </div>
                  <div className="cardOverlay">
                    <div className="button">
                      <Link to="/addcart">
                        <button style={{ backgroundColor: "red", color: "white" }}

                        >ADD TO CARD</button>
                      </Link>

                      <Link to="/quickview">
                      <button style={{ backgroundColor: "grey", color: "white" }}
                        onClick={

                          () => {
                            dispatch({
                              type: "cart",
                              addCart: ele
                            })
                            { console.log("ele", ele) }
                          }
                        }
                      >QUICK VIEW</button>
                        </Link>
                    </div>
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

export default HomePage