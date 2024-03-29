import Item from "../Item/Item"

const ItemList = ({ products }) => { 
  return (
    <div className="productos">
       {products.map(Prod => {
        return <Item key={Prod.id} {...Prod}/>
       })} 
    </div>
  )
}

export default ItemList