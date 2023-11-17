from flask import Flask, Blueprint

hello = Blueprint('hello', __name__)


@hello.route('/')
def hello_world():
    return 'Hello, World!'
