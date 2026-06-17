# Customer Churn Prediction System

An AI-powered machine learning application that predicts whether a customer is likely to leave a company based on customer behavior, subscription details, and service usage patterns.

## 📌 Overview

Customer churn is one of the biggest challenges faced by businesses. Acquiring new customers is often more expensive than retaining existing ones. This project uses machine learning techniques to analyze customer data and predict whether a customer is likely to discontinue a service.

The system helps businesses identify at-risk customers and take proactive measures to improve customer retention.

## 🎯 Objectives

- Analyze customer data and identify churn patterns.
- Train a machine learning model to predict customer churn.
- Provide churn predictions based on customer information.
- Visualize customer statistics and churn trends.
- Support data-driven decision-making for customer retention strategies.

## 🚀 Features

- Customer churn prediction using Machine Learning.
- User-friendly web interface.
- Real-time prediction results.
- Data preprocessing and feature engineering.
- Model training and evaluation.
- Churn probability estimation.
- Analytics dashboard with charts and statistics.
- Responsive design using Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Chart.js

### Backend
- Flask
- Python

### Machine Learning
- Pandas
- NumPy
- Scikit-learn

### Version Control
- Git
- GitHub

### Dataset
- Customer Churn Dataset (CSV)

## 📂 Project Structure

```text
customer-churn-prediction-system/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── model.pkl
│   └── requirements.txt
│
├── dataset/
│   └── customer_churn.csv
│
├── screenshots/
│
└── README.md
```

## ⚙️ How It Works

1. Customer data is collected from the dataset.
2. Data preprocessing is performed:
   - Handling missing values
   - Encoding categorical variables
   - Feature scaling
3. The machine learning model is trained.
4. The trained model is saved for future predictions.
5. Users enter customer details through the web interface.
6. The model predicts whether the customer is likely to churn.
7. Results are displayed along with churn probability and risk level.

## 🧠 Machine Learning Workflow

```text
Dataset
   ↓
Data Cleaning
   ↓
Feature Engineering
   ↓
Train/Test Split
   ↓
Model Training
   ↓
Model Evaluation
   ↓
Saved Model (.pkl)
   ↓
Flask API
   ↓
React Frontend
   ↓
Prediction Result
```

## 📊 Model Algorithms

The project may utilize one or more of the following algorithms:

- Logistic Regression
- Decision Tree Classifier
- Random Forest Classifier
- Gradient Boosting Classifier

**Recommended Model:** Random Forest Classifier

## 📈 Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix
- ROC-AUC Score

## 🖥️ User Interface Modules

### Dashboard
- Total Customers
- Churned Customers
- Active Customers
- Churn Rate

### Prediction Module
Users can enter customer details such as:
- Gender
- Senior Citizen Status
- Tenure
- Monthly Charges
- Contract Type
- Internet Service

The system will display:
- Churn Prediction (Yes / No)
- Churn Probability (%)
- Risk Category (Low / Medium / High)

### Analytics Module
- Customer distribution charts
- Churn analysis charts
- Service usage insights
- Contract type comparisons

## 💻 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/customer-churn-prediction-system.git
cd customer-churn-prediction-system
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔮 Future Enhancements

- Customer segmentation using clustering algorithms.
- AI-generated customer retention recommendations.
- Email alerts for high-risk customers.
- CRM integration.
- Cloud deployment.
- Explainable AI (XAI) for prediction transparency.
- Real-time customer monitoring.

## 📚 Learning Outcomes

Through this project, developers can gain experience in:

- Data preprocessing
- Feature engineering
- Machine learning model development
- Model evaluation
- REST API development
- React development
- Tailwind CSS
- Data visualization
- Full-stack application development
- Git and GitHub workflow

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome. Feel free to fork the repository and submit a pull request.

## 📄 License

This project is intended for educational and academic purposes.

## 👨‍💻 Author

Developed as a Final Year Project for academic learning, customer retention analysis, and machine learning application development.
