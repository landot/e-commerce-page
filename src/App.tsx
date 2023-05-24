import { useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import { ProductDescription } from './components/ProductDescription';
import { ProductImages } from './components/ProductImages'
import { ProductImagesOverlay } from './components/ProductImagesOverlay';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [productInCart, setProductInCart] = useState(0);

  return (
    <div className='app'>
      <p>{showOverlay.toString()}</p>
      <Header productsInCart={productInCart} handleCartRemove={() => setProductInCart(0)}/>
      <hr />
      <div className='product-content'>
        <ProductImages isOverlay={false} handleToggleOverlay={setShowOverlay}/>
        <ProductDescription handleCartUpdate={(quantity: number) => setProductInCart(prev => prev + quantity )}/>
      </div>
      {showOverlay && <ProductImagesOverlay handleToggleOverlay={setShowOverlay}/>}
    </div>
  )
}

export default App
