from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from your frontend

API_KEY = "your_actual_api_key"
BASE_URL = "http://api.weatherapi.com/v1/current.json"

@app.route('/weather', methods=['GET'])
def get_weather():
    location = request.args.get('q')
    if not location:
        return jsonify({"error": "Location is required"}), 400
    
    response = requests.get(f"{BASE_URL}?key={API_KEY}&q={location}&aqi=yes")
    return response.json()

if __name__ == '__main__':
    app.run(debug=True)
