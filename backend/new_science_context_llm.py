from transformers import pipeline, AutoTokenizer, AutoModelForQuestionAnswering
from flask import Flask, request, jsonify

# Initialize Flask app
app = Flask(__name__)

# Load pre-trained language model for question answering
qa_model_name = "distilbert-base-uncased-distilled-squad"  # Example model, replace with your desired model
qa_tokenizer = AutoTokenizer.from_pretrained(qa_model_name)
qa_model = AutoModelForQuestionAnswering.from_pretrained(qa_model_name)
qa_pipeline = pipeline("question-answering", model=qa_model, tokenizer=qa_tokenizer)

@app.route('/predict', methods=['POST'])
def predict():
    # Receive JSON request with user question
    content = request.json
    user_question = content['question']

    # Example: Extract wildfire and meteorological variables
    # Replace with actual data retrieval logic based on your application
    wildfire_data = get_wildfire_data()
    meteorological_data = get_meteorological_data()

    # Combine user question with additional context
    context = f"Wildfire data: {wildfire_data}. Meteorological data: {meteorological_data}."
    # context = f"Context related to your specific data."

    # Generate answer using fine-tuned model
    answer = qa_pipeline(question=user_question, context=context)

    return jsonify({'answer': answer})

def get_wildfire_data():
    # Replace with logic to fetch wildfire data from your source (database, API, etc.)
    return "Placeholder wildfire data"

def get_meteorological_data():
    # Replace with logic to fetch meteorological data from your source (database, API, etc.)
    return "Placeholder meteorological data"

if __name__ == '__main__':
    app.run(debug=True)
