import React from "react";

const AccuracyComponent = ({ correct, total }) => {
  const accuracy = (correct / total) * 100;
  const formattedAccuracy = accuracy ? accuracy.toFixed(2) : 100;
  return (
    <div>
      <h1>Accuracy</h1>
      <p>Correct: {correct}</p>
      <p>Total: {total}</p>
      <p>Accuracy: {formattedAccuracy}%</p>
    </div>
  );
};

export default AccuracyComponent;
