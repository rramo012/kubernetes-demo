FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install psycopg2

COPY ./app /app