import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Meals from './components/Layout/Meals/Meals';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <Meals />
    </div>
  );
}

export default App;
