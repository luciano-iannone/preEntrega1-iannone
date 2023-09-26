import './App.css'
import Categories from './components/categories/categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/productList'
import CategoriesProductList from './components/categories/categoriesProductList'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Categories />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
        </Routes>

      </Router>
    </>
  )
}

export default App