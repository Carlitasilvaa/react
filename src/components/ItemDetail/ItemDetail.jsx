import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, category, price, stock }) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} />
        <p>{category}</p>
        <h1>${price}</h1>
        <ItemCount stock={stock}/>
    </article>
  );
}

export default ItemDetail;