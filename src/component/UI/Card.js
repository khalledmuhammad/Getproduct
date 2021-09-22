import classes from './Card.module.css';

const Card = (props) => {
  return (
    <section
    style={props.style}
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
