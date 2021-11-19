import Card from '../../UI/Card/Card';
import MealItem from './MealItem';
import styles from './Meals.module.css';

const MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export default function Meals() {
  return (
    <div className={styles.meals}>
      <Card className={styles['meals-card']}>
        <ul>
          {MEALS.length === 0 && (
            <div className={styles.empty}>No meals found.</div>
          )}
          {MEALS.length > 0 &&
            MEALS.map((meal) => <MealItem key={meal.id} data={meal} />)}
        </ul>
      </Card>
    </div>
  );
}
