import PropTypes from "prop-types";

const Pizza = (props) => {
  const image = props.image || "https://picsum.photos/200";
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={image} alt={props.name} />
    </div>
  );
};

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Pizza;
