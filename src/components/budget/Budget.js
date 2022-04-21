import { useSelector } from 'react-redux';

const Budget = () => {
  const movements = useSelector((state) => state.movements.movements);

  const calculatedBudget = movements
    .map((movement) => movement.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return <div>Budget: {calculatedBudget}</div>;
};

export default Budget;
