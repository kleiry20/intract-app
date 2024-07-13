import "./ButtonGroup.css";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <div className="button-group-wrapper">
        <input type="radio" id="button1" name="button-group" />
        <label htmlFor="button1" className="button active">
          Essentials
        </label>

        <input type="radio" id="button2" name="button-group" />
        <label
          htmlFor="button2"
          className="button"
          style={{ color: "#737373" }}
        >
          Alpha Hub
        </label>
      </div>
    </div>
  );
};

export default ButtonGroup;
