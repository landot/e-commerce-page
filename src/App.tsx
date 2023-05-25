import { useState } from 'react';
import './App.css'
import { HamburgerOverlay } from './components/HamburgerOverlay';
import { Header } from './components/Header'
import { ProductDescription } from './components/ProductDescription';
import { ProductImages } from './components/ProductImages'
import { ProductImagesOverlay } from './components/ProductImagesOverlay';

function App() {
  const [showHamburgerOverlay, setShowHamburgerOverlay] = useState(true);
  const [showImageOverlay, setShowImageOverlay] = useState(false);
  const [productInCart, setProductInCart] = useState(0);

  return (
    <div className='app'>
      <Header 
        productsInCart={productInCart} 
        handleCartRemove={() => setProductInCart(0)}
        openHamburgerMenu={() => setShowHamburgerOverlay(true)}
      />
      <hr />
      <div className='product-content'>
        <ProductImages isOverlay={false} handleToggleOverlay={setShowImageOverlay}/>
        <ProductDescription handleCartUpdate={(quantity: number) => setProductInCart(prev => prev + quantity )}/>
      </div>
      {showImageOverlay && <ProductImagesOverlay handleToggleOverlay={setShowImageOverlay}/>}
      {showHamburgerOverlay && <HamburgerOverlay handleOverlayToggle={setShowHamburgerOverlay}/>}
    </div>
  )
}

export default App
