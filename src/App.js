import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Meals from './components/Layout/Meals/Meals';

import styles from './App.module.css';
import Footer from './components/Layout/Footer/Footer';
import { CartProvider } from './store/cart-context';

function App() {
  return (
    <CartProvider>
      <div className={styles.wrapper}>
        <Header />
        <Hero />
        <Meals />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
