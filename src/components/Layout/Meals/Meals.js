import { useEffect, useState } from 'react';
import Card from '../../UI/Card/Card';
import Loading from '../../UI/Loading/Loading';
import MealItem from './MealItem';
import styles from './Meals.module.css';

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://react-food-21b62-default-rtdb.firebaseio.com/meals.json'
      );
      const data = await response.json();

      const fetchedMeals = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      setIsLoading(false);
      setMeals(fetchedMeals);
    }

    fetchData();
  }, []);

  let content = <p>No meals found</p>;

  if (meals.length > 0) {
    content = meals.map((meal) => <MealItem key={meal.id} data={meal} />);
  }

  if (isLoading) {
    content = <Loading />;
  }

  return (
    <div className={styles.meals}>
      <Card className={styles['meals-card']}>
        <ul>{content}</ul>
      </Card>
    </div>
  );
}
