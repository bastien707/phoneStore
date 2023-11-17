from flask import Flask
from routes.hello_route import hello

app = Flask(__name__)
app.register_blueprint(hello)

if __name__ == '__main__':
    app.run(debug=True)
