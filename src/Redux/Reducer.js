const initial={
    pizzas:[],
    addtocart:[]
    
}

const basicReducer=(storedata=initial ,action)=>{
console.log(initial);
if(action.type==="products"){
        
    return{
        ...storedata,
        pizzas:action.payload
    }

    // if(action.type==="pizza"){
        
    //     return{
    //         // ...storedata,
    //         pizzas:action.payload
    //         // ...storedata,
    //         // pizzas: [...storedata.pizzas, action.pizzas]
    //     };
    
    }else if(action.type === "cart"){

        return{
            ...storedata,
            addtocart: [...storedata.addtocart, action.addCart]
           
          
        }
    }
    return storedata;
    }




export default basicReducer;