from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load model and encoders
model = joblib.load("model.pkl")
encoders = joblib.load("encoders.pkl")

@app.route("/")
def home():
    return {"message": "Customer Churn Prediction API Running"}

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        input_data = pd.DataFrame([data])

        # Encode categorical columns
        for col in input_data.columns:
            if col in encoders:
                input_data[col] = encoders[col].transform(input_data[col])

        prediction = model.predict(input_data)[0]
        probability = model.predict_proba(input_data)[0][1]

        return jsonify({
            "prediction": "Yes" if prediction == 1 else "No",
            "churn_probability": round(probability * 100, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)