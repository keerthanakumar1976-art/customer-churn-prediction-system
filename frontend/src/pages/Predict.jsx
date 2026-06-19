import { useState } from "react";
import axios from "axios";

function Predict() {
  const [formData, setFormData] = useState({
    gender: "",
    SeniorCitizen: "",
    Partner: "",
    Dependents: "",
    tenure: "",
    PhoneService: "",
    InternetService: "",
    Contract: "",
    MonthlyCharges: "",
    TotalCharges: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );

      setResult(res.data);
    } catch (error) {
      console.error("Prediction Error:", error);
      alert("Prediction failed. Check backend.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Churn Prediction</h1>

      <input
        type="text"
        name="gender"
        placeholder="Gender (Male/Female)"
        value={formData.gender}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="SeniorCitizen"
        placeholder="Senior Citizen (0/1)"
        value={formData.SeniorCitizen}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="Partner"
        placeholder="Partner (Yes/No)"
        value={formData.Partner}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="Dependents"
        placeholder="Dependents (Yes/No)"
        value={formData.Dependents}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="tenure"
        placeholder="Tenure"
        value={formData.tenure}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="PhoneService"
        placeholder="Phone Service (Yes/No)"
        value={formData.PhoneService}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="InternetService"
        placeholder="Internet Service (DSL/Fiber optic/No)"
        value={formData.InternetService}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="Contract"
        placeholder="Contract"
        value={formData.Contract}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="MonthlyCharges"
        placeholder="Monthly Charges"
        value={formData.MonthlyCharges}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="TotalCharges"
        placeholder="Total Charges"
        value={formData.TotalCharges}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handlePredict}>
        Predict
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Prediction: {result.prediction}</h3>
          <h3>
            Churn Probability: {result.churn_probability}%
          </h3>
        </div>
      )}
    </div>
  );
}

export default Predict;