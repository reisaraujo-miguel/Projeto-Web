import { useState } from "react";
import "./ExpirationDateField.css";

const ExpirationDateField = ({ setData, isRequired = false }) => {
  const [expirationDate, setExpirationDate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleExpirationDateChange = (event) => {
    let value = event.target.value;

    // Remove any non-digit and non-slash characters
    value = value.replace(/[^0-9/]/g, "");

    // Insert '/' after the month (2 characters) if missing
    if (value.length > 2 && value.indexOf("/") === -1) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpirationDate(value);
    setIsValid(true); // Reset validity on change
  };

  const verifyExpirationDate = () => {
    const currentDate = new Date();
    const [month, year] = expirationDate.split("/");

    if (
      expirationDate.length !== 5 ||
      isNaN(month) ||
      isNaN(year) ||
      Number(month) < 1 ||
      Number(month) > 12
    ) {
      setIsValid(false);
      setExpirationDate("");
      return;
    }

    const expiration = new Date(Number(`20${year}`), Number(month) - 1);
    const isValidDate = expiration > currentDate;

    if (isValidDate) {
      setData(expiration);
    } else {
      setExpirationDate("");
    }

    setIsValid(isValidDate);
  };

  const handleBlur = () => {
    verifyExpirationDate();
  };

  if (isRequired) {
    return (
      <div>
        <label htmlFor="input" style={{ fontSize: "16px" }}>
          Expiration Date*
        </label>
        <div id="input">
          <input
            type="text"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            onBlur={handleBlur}
            placeholder="MM/YY"
            maxLength="5"
            required
            className={`input-field ${isValid ? "" : "invalid"}`}
          />
        </div>
        {!isValid && (
          <div className="error-message">Invalid or expired date!</div>
        )}
      </div>
    );
  }

  return (
    <div>
      <label htmlFor="input" style={{ fontSize: "16px" }}>
        Expiration Date*
      </label>
      <div id="input">
        <input
          type="text"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          onBlur={handleBlur}
          placeholder="MM/YY"
          maxLength="5"
          className={`input-field ${isValid ? "" : "invalid"}`}
        />
      </div>
      {!isValid && (
        <div className="error-message">Invalid or expired date!</div>
      )}
    </div>
  );
};

export default ExpirationDateField;
