import React from 'react'
// import { useNavigate } from 'react-router'
import './PizzaDetails.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const PizzaDetails = () => {
    // const navigate = useNavigate();
    
    const { addtocart } = useSelector((storeData) => {
        return storeData
    })

    
  
    return (

        <div className="main">
         
            {
              addtocart.length === 0 ? <div><h1>Cart is Empty</h1></div> :
                <div className='pizzaDetails'>
                  {addtocart.map((ele) => {
                    return <div className='AddtocartItems'>
                      <div className='imageDiv'>
                        <img src={ele.linkImagen} alt="" width="100%" height="100%" />
                      </div>
                   <div className="rightside">
                    <h2>{ele.nombre}</h2>
                    <p>{ele.descripcion}</p>
                    <p>Price : $ {ele.precio}</p>
                    <p>Manufacturing Date :  {ele.created_at}</p>
                    <Link to="/addcart">
                    <button>
                        Add To Cart
                    </button>
                    </Link>
                   </div>
                    </div>
                  })}
                </div>
            }
          
           
       

        </div>
    )
}

export default PizzaDetails