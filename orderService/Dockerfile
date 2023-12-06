FROM python:3.10.13-alpine3.17

WORKDIR /app

COPY . /app

# Install dependencies
RUN pip install --upgrade pip
RUN pip --no-cache-dir install -r requirements.txt

# Specify the command to run on container start
CMD ["python3", "app.py"]

