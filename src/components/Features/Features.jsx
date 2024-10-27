import PropTypes from "prop-types";
import icons from "../../icons/sprite.svg";
import css from "./Features.module.css";

const Features = ({ truck }) => {
  const features = [
    {
      key: "transmission",
      label: "Automatic",
      svg: "automatic",
      value: "automatic",
    },
    { key: "kitchen", label: "Kitchen", svg: "cup" },
    { key: "ac", label: "AC", svg: "wind" },
    { key: "bathroom", label: "Bathroom", svg: "shower" },
    { key: "tv", label: "TV", svg: "tv" },
    { key: "radio", label: "Radio", svg: "radio" },
    { key: "gas", label: "Gas", svg: "gas" },
    { key: "microwave", label: "Microwave", svg: "microwave" },
    { key: "refrigerator", label: "Fridge", svg: "fridge" },
    { key: "engine", label: "Hybrid", svg: "petrol", value: "hybrid" },
    { key: "engine", label: "Diesel", svg: "petrol", value: "diesel" },
    { key: "engine", label: "Petrol", svg: "petrol", value: "petrol" },
  ];

  return (
    <div className={css.features}>
      {features.map((feature) => {
        const isFeatureAvailable =
          truck[feature.key] === true || truck[feature.key] === feature.value;
        return isFeatureAvailable ? (
          <div className={css.feature} key={feature.key}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${icons}#${feature.svg}`} />
            </svg>
            <span>{feature.label}</span>
          </div>
        ) : null;
      })}
    </div>
  );
};

Features.propTypes = {
  truck: PropTypes.shape({
    transmission: PropTypes.string,
    kitchen: PropTypes.bool,
    ac: PropTypes.bool,
    bathroom: PropTypes.bool,
    tv: PropTypes.bool,
    radio: PropTypes.bool,
    gas: PropTypes.bool,
    microwave: PropTypes.bool,
    refrigerator: PropTypes.bool,
    engine: PropTypes.string,
  }).isRequired,
};

export default Features;
