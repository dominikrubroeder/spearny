import Movement from './Movement';
import styles from './Movements.module.css';

const Movements = () => {
  const movements = [
    {
      id: new Date().toISOString() + Math.random(),
      type: 'expense',
      title: 'Adidas Hoodie',
      amount: 99.99,
      description: 'Movement description/notes...',
      dateAdded: new Date(),
      tags: ['Kleidung', 'Zalando', 'Adidas'],
      paidBy: 'PayPal',
      paidTo: 'Zalando',
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'income',
      title: 'Taschengeld',
      amount: 100,
      description: 'Movement description/notes...',
      dateAdded: new Date(),
      tags: [],
      receivedBy: 'Cash',
      receivedFrom: 'Parents',
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'income',
      title: 'Create Website',
      amount: 1600,
      description: 'Movement description/notes...',
      dateAdded: new Date(),
      tags: ['Work', 'Design', 'Development'],
      receivedBy: 'Bank transfer',
      receivedFrom: 'Mustermann GmbH',
    },
    {
      id: new Date().toISOString() + Math.random(),
      type: 'expense',
      title: 'Restaurant Il Soprano',
      amount: 55,
      description: 'Movement description/notes...',
      dateAdded: new Date(),
      tags: ['Food', 'Italien food'],
      paidBy: 'Cash',
      paidTo: 'Restaurant Il Soprano',
    },
  ];

  return (
    <ul className={styles.movements}>
      {movements.map((movement) => (
        <Movement movement={movement} key={movement.id} />
      ))}
    </ul>
  );
};

export default Movements;
