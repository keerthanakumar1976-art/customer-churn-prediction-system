import { useState } from "react";
import axios from "axios";

function Predict() {
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    const data = {
      gender: "Male",
      SeniorCitizen: 0,
      Partner: "Yes",
      Dependents: "No",
      tenure: 12,
      PhoneService: "Yes",
      InternetService: "DSL",
      Contract: "Month-to-month",
      MonthlyCharges: 70,
      TotalCharges: 840
    };

    const res = await axios.post(
      "http://127.0.0.1:5000/predict",
      data
    );

    setResult(res.data);
  };

  return (
    <div>
      <h1>Customer Churn Prediction</h1>

      <button onClick={handlePredict}>
        Predict
      </button>

      {result && (
        <div>
          <h3>Prediction: {result.prediction}</h3>
          <h3>Probability: {result.churn_probability}%</h3>
        </div>
      )}
    </div>
  );
}

export default Predict;