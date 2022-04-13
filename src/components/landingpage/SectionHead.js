import classes from './SectionHead.module.scss';

const SectionHead = (props) => {
  const overline = props.overline;
  const description = props.description;

  return (
    <div className={`${classes['section-head']} h-grid-big`}>
      <div className="h-grid">
        {overline && <h3 className="section__overline">{overline}</h3>}
        <h2 className="section__headline">{props.headline}</h2>
      </div>
      {description && <p className="section__description">{description}</p>}
    </div>
  );
};

export default SectionHead;
