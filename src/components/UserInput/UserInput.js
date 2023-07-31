import { useState } from "react";
import styles from "./UserInput.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const changeHandler = (input, value) => {
    setUserInput({
      ...userInput,
      [input]: +value,
    });
  };
  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={userInput["current-savings"]}
              onChange={(e) => changeHandler("current-savings", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInput["yearly-contribution"]}
              onChange={(e) =>
                changeHandler("yearly-contribution", e.target.value)
              }
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={userInput["expected-return"]}
              onChange={(e) => changeHandler("expected-return", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={userInput["duration"]}
              onChange={(e) => changeHandler("duration", e.target.value)}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHandler}
          >
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default UserInput;
