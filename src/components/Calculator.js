import { useState } from "react";

const Calculator = () => {
  // State to store input values and result/error messages
  const [numbers, setNumbers] = useState({ num1: "", num2: "" });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Validate input values
  const validateInput = (num1, num2) => {
    if (
      num1.trim() === "" ||
      num2.trim() === "" ||
      isNaN(num1) ||
      isNaN(num2)
    ) {
      setError("Error!");
      setResult("Number cannot be empty");
      return false;
    }
    setError("Success");
    return true;
  };

  // Perform calculation based on the selected operation
  function performCalculation(operation) {
    if (validateInput(numbers.num1, numbers.num2)) {
      let res;

      if (operation === "add") {
        res = parseFloat(numbers.num1) + parseFloat(numbers.num2);
      } else if (operation === "subtract") {
        res = parseFloat(numbers.num1) - parseFloat(numbers.num2);
      } else if (operation === "multiply") {
        res = parseFloat(numbers.num1) * parseFloat(numbers.num2);
      } else if (operation === "divide") {
        if (numbers.num2 === "0") {
          setError("Error!");
          setResult("Cannot divide by zero");
          return;
        }
        res = parseFloat(numbers.num1) / parseFloat(numbers.num2);
      }

      setResult(res);
    }
  }

  return (
    <>
      <div className="calculator-container">
        <div>
          <h1 className="heading">React Calculator</h1>
          <input
            type="text"
            className="input"
            placeholder="num1"
            value={numbers.num1}
            name="num1"
            onChange={(e) => setNumbers({ ...numbers, num1: e.target.value })}
          />
          <input
            type="text"
            className="input"
            placeholder="num2"
            value={numbers.num2}
            name="num2"
            onChange={(e) => setNumbers({ ...numbers, num2: e.target.value })}
          />
        </div>
        <div className="buttons-div">
          <button className="button" onClick={() => performCalculation("add")}>
            +
          </button>
          <button
            className="button"
            onClick={() => performCalculation("subtract")}
          >
            -
          </button>
          <button
            className="button"
            onClick={() => performCalculation("multiply")}
          >
            *
          </button>
          <button
            className="button"
            onClick={() => performCalculation("divide")}
          >
            /
          </button>
        </div>
        <div className="errors">
          {error && (
            <p style={{ color: error === "Error!" ? "red" : "green" }}>
              {error}
            </p>
          )}
          {result !== null && <p>Result - {result}</p>}
        </div>
      </div>
    </>
  );
};

export default Calculator;
