import {useState,useEffect} from "react"
import Card from "./Card";
function Products() {
    const [products, setproducts] = useState([])
   //fetch the product dat from the fakestore Api
    useEffect(() => {
      
      fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setproducts(data));
    
     
    }, [])
    




  return (
    <>
    {
        products.map((p)=>{
       return <Card image={p.image} title={p.title}  price={p.price}  />
        })
    }
    </>
  )
}

export default Products