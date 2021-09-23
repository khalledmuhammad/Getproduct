import  { CartActions } from "./cart"

export const sendCartData=(cart)=>{
    return async (dispatch)=>{
        const sendData= async()=>{
         const response = await  fetch('https://react-4f5a1-default-rtdb.firebaseio.com/.json' , {
                method : 'PUT' ,
                body : JSON.stringify(cart)
              })
              if(!response.ok){
                  throw new Error("sendin failed");
              }
        }
        try {
            sendData()
            
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const fetchData=()=>{
    return async (dispatch) =>{
        const fetchData=async()=>{
            const response = await  fetch('https://react-4f5a1-default-rtdb.firebaseio.com/.json' )
          const data = await response.json()
          console.log(data)
          return data

        }
        try {
            const cartData = await fetchData();
            dispatch(CartActions.replaceCart( 
                {items : cartData.items || [] , totalQuantity : cartData.totalQuantity}

            ))

            
        } catch (error) {

            
        }

    }
}