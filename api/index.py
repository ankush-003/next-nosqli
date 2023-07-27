from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline

class Payload(BaseModel):
    payload: str

app = FastAPI(docs_url="/api/docs", redoc_url="/api/redoc", openapi_url="/api/openapi.json")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

classifier = pipeline("sentiment-analysis", model="ankush-003/nosqli_identifier")

@app.get("/api/hello")
async def hello():
    return {"message": "Hello World"}

@app.post("/api/test")
async def test(payload: Payload):
    print("received payload: ", payload.payload)
    prediction = classifier(payload.payload)[0]  
    print(prediction)
    return {"result": prediction}