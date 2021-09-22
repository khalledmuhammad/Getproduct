import React , {useEffect , useState} from 'react'
import classes from './Product.module.css'
import ProductItems from './ProductItems'

function Product() {
    const [products , setProducts] =useState([])
    useEffect(()=>{
        const fetchProduct=async()=>{
           await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setProducts(data)
            })
            }
            fetchProduct()
    } , [])


    return (
        <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul style={{ display:"flex",justifyContent:"center" , flexDirection:"row",flexWrap:"wrap"}}>
                {
                    products.map(products=>{
                        return <li  style={{ display:"flex",margin:"2px"    }} key={products.id}> <ProductItems 
                        id={products.id} 
                        title={products.title}
                        price={products.price}
                        description={products.description}
                        image={products.image}
                        /> </li>
                    })
                }
            </ul></section>
    )
}

export default Product
