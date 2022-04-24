import { useSelector } from 'react-redux';
import './Budget.scss';
import BaseDropdown from '../base/BaseDropdown';

const Budget = () => {
  const movements = useSelector((state) => state.movements.movements);

  const monthlyBudget = 1000;

  const calculatedBudget = movements
    .map((movement) => movement.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  const headMarkup = (
    <span className="v-grid-gap-small">
      Budget:
      <span className={`budget ${calculatedBudget > 0 ? 'green' : 'red'}`}>
        {calculatedBudget}
      </span>
    </span>
  );

  return (
    <BaseDropdown head={headMarkup}>
      <p>
        {calculatedBudget} from max. 1000€ für {currentMonth} {currentYear}{' '}
        verfügbar.
      </p>
    </BaseDropdown>
  );
};

export default Budget;
