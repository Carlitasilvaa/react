import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/navbar/navbar'
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    <div className='app'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer  greeting={' MUEBLES Y OBJETOS DECORATIVOS'}/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer  greeting={' MUEBLES Y OBJETOS DECORATIVOS'}/>}/>
        <Route path="/detail/:productsId" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
