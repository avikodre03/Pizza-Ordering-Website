import React from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import "./OrderPage.css"
import { Link } from 'react-router-dom'

const OderPage = () => {
  const navigate = useNavigate();
  
  return (
   
    <div className='Cart'>
      
       <div className="cartDetails"> 
       
       <div className="cartDetailsDiv">
<div className="top">
 <h2> WELCOME TO ITALIAN PIZZA!</h2>
 <p>we deliver pizza in 40 minutes max. if not - pizza's on us!</p>
</div>
<div className="bottom">
<div className="email">
<p>Email</p>
<input type="email" name="" id="" />
</div>

<div className="phone">
  <p>Phone</p>
 
  <div className="number">
    <input type="number" name="" id="" placeholder='Area' />
    <input type="number" name="" id="" placeholder='Local'/>
    <input type="number" name="" id=""  placeholder='Local' />
  </div>
  </div>
  <div className="slice">
    <p>Number of slices</p>
    <input type="text" />
  </div>
  <div className="pizzasize">
    <p>Pizzasize</p>
    <div className="radio">

    <input type="radio" name="" id="" /> <label >8-inch</label>
    <input type="radio" name="" id="" /> <label >10-inch</label>
    <input type="radio" name="" id="" /> <label >12-inch</label>
    <input type="radio" name="" id="" /> <label >14-inch</label>
    </div>
    
  </div>
  <div className="toppings">
    <p>Toppings</p>
    <div className="checkbox">

    <input type="checkbox" name="" id="" /> <label >Pepperony</label>
    <input type="checkbox" name="" id="" /> <label >Onions</label>
    <input type="checkbox" name="" id="" /> <label >Mushrooms</label>
    <input type="checkbox" name="" id="" /> <label >Sausage</label>
    </div>
  </div>
  <div className="check">
    <input type="checkbox" name="" id="" /> <label >I agree to the <span>TERM AND CONDITIONS</span></label>

</div>

       
</div>

       
       </div>
       <div className="buttonDiv">

<Link to="/delivery">

       <button>Order Now</button>
</Link>
       </div>

       </div>
       <div className="rightDiv">
       <button
        onClick={() => {
          navigate("/")
        }}
       >Home</button>
       </div>
     </div>
  )
}

export default OderPage