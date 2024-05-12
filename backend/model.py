from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

model = joblib.load('best_random_forest_regressor.pkl')


@app.route('/predict', methods=['POST'])
def predict():
    
    data = request.json
    previous_loan = data['previous_loan']
    profitable = data['profitable']
    revenue = data['revenue']
    loan_term = data['loan_term']
    cibil_score = data['cibil_score']
    profit = data['profit']
    loan_amount = data['loan_amount']
    commercial_assets_value = data['commercial_assets_value']
    luxury_assets_value = data['luxury_assets_value']
    bank_asset_value = data['bank_asset_value']
  
    print(data['previous_loan'])
    print(previous_loan)
    print([previous_loan, profitable, revenue, loan_term, cibil_score, profit, loan_amount, commercial_assets_value, luxury_assets_value, bank_asset_value])
    prediction = model.predict([[previous_loan, profitable, revenue, loan_term, cibil_score, profit, loan_amount, commercial_assets_value, luxury_assets_value, bank_asset_value]])
    
    return jsonify({'prediction': round(prediction.tolist()[0])})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)  
