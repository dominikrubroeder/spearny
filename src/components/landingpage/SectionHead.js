import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './SectionHead.module.scss';

const SectionHead = (props) => {
  const overline = props.overline;
  const description = props.description;

  return (
    <div className={`${classes['section-head']} h-grid-big`}>
      <div className="h-grid">
        {overline && <h3 className="section__overline">{overline}</h3>}
        <a className="v-grid" href={`#${props.anchor}`}>
          <h2 className="section__headline">{props.headline}</h2>
          <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
        </a>
      </div>
      {description && <p className="section__description">{description}</p>}
    </div>
  );
};

export default SectionHead;
