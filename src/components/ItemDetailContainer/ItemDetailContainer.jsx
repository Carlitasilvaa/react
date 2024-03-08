import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const {productsId} = useParams()
    useEffect(() => {
        getProductsById(productsId)
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productsId]);

    return (
        <div>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer
