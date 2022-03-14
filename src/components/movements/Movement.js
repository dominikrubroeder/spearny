import styles from './Movement.module.css';

// Note: Turn movement tags into a Label component
const Movement = (props) => {
  return (
    <div className={styles.movement}>
      <div className={styles.main}>
        <div className={styles.head}>
          <h3 className="movement__title">{props.movement.title}</h3>
          <div className="movement__amount">{props.movement.amount}€</div>
        </div>
        <div className="movement__description">
          {props.movement.description}
        </div>
        <div className="movement__meta">
          <div className="movement__tags">
            {props.movement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="movement__link">.</div>
    </div>
  );
};

export default Movement;
