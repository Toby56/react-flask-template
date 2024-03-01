from flask import Flask

app = Flask(__name__)

@app.route("/data")
def return_data():
    return {
        "data": "the-data"
    }