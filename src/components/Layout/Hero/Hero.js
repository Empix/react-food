import Card from '../../UI/Card/Card';
import styles from './Hero.module.css';
import background from '../../../assets/hero-image-ray-piedra.jpg';

export default function Hero() {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Card className={styles.content}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </div>
  );
}
