import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const{categoryId} =useParams()
    useEffect(() =>{
        const asynFunction =categoryId ? getProductsByCategory : getProducts
        asynFunction(categoryId)
        .then (res => {
            setProducts(res)
        }).catch (err =>{
            console.log(err)
        })
    },[categoryId])
    return (
       <div>
        <h2 className="subtitulo">{greeting}</h2>
        <ItemList products={products}/>
       </div>
    )
}
export default ItemListContainer