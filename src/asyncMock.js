const Products = [
    { id: 1, name: 'Lámpara de pie', category: 'Iluminación', price: 12000, img:'https://gledstore.com.ar/wp-content/uploads/2022/05/Elena-PIE-1.jpg', stock: 15},
    { id: 2, name: 'Cojín decorativo', category: 'Textiles', price: 4500,  img:'https://us.123rf.com/450wm/serezniy/serezniy1806/serezniy180619054/102921607-sof%C3%A1-con-cojines-de-colores-en-la-habitaci%C3%B3n.jpg?ver=6', stock: 20 },
    { id: 3, name: 'Espejo redondo', category: 'Decoración de pared', price: 8500,img:'https://dcdn.mitiendanube.com/stores/001/364/361/products/espejo-redondo-biselado1-62c1b672292e61edb216020374152453-640-0.jpg', stock: 35 },
    { id: 4, name: 'Maceta de cerámica', category: 'Plantas y macetas', price: 5800,img:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/6e23958e-9f78-4942-b7f3-999d83e9cabe.99df08106e94be0e786138595a66eb0f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', stock: 50 },
    { id: 5, name: 'Cuadro moderno', category: 'Arte', price: 7200, img:'https://http2.mlstatic.com/D_NQ_NP_953472-MLA47208937307_082021-O.webp', stock: 8 },
    { id: 6, name: 'Jarrón de cristal', category: 'Decoración de mesa', price: 6999,img:'https://i.pinimg.com/736x/88/5f/13/885f13af95d8944c7cca55f91bc406d4.jpg', stock: 40 },
  ];


export const getProducts =() =>{
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(Products);
        },1000);
    });
};
export const getProductsByCategory =(categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve( Products.filter((prod) =>prod.category == categoryId));
        },1000);
    });
};

export const getProductsById =(productsId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Products.find((prod) =>prod.id == productsId));
        },1000);
    });
};
