import Header from './components/Header/Header';
import Meal from './components/Meals/Meals';
import ModalDOM from './components/UI/ModalDOM/ModalDOM';
import CartProvider from './store/CartProvider';
import React,{useState} from 'react';
const App = () => {
  const [checkModal, setCheckModal] = useState(false);
  const handleClose = () => {
    setCheckModal(false);
  };
  const handleOpen = () => {
      setCheckModal(true);
  };
  return ( 
      <CartProvider>
        <Header onOpen={handleOpen} />
        <Meal />
        {checkModal && <ModalDOM onOpen={handleOpen} onClose={handleClose} />}
      </CartProvider>
   );
}
 
export default App;