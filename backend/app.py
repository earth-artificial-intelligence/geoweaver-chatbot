from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

# Load the pre-trained language model for question answering
qa_pipeline = pipeline("question-answering")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    context = data.get('context', '')
    question = data.get('question', '')

    if not context or not question:
        return jsonify({'error': 'Context and question are required'}), 400

    response = qa_pipeline(question=question, context=context)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
