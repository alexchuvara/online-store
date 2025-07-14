import './App.css'
import { Route, Routes } from 'react-router'
import { BestSellers } from './BestSellers.tsx';
import {Header} from './Header.tsx';
import { Product } from './Product.tsx';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<BestSellers />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes> 
    </div>
  )
}

export default App