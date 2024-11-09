from fastapi import FastAPI

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")


@app.get("/api")
async def hello():
    return {"message": "Hello world! (From Python)"}