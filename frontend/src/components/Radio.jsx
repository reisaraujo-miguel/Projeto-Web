import "./Radio.css";

const Radio = ({ value, onClick, backgroundColor }) => {
  const inputStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="radio-button-wrapper" style={inputStyle}>
      <input type="radio" onClick={onClick} />
      <label>{value}</label>
    </div>
  );
};

export default Radio;
