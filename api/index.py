from fastapi import FastAPI
from gradio_client import Client
from fastapi.responses import HTMLResponse, RedirectResponse

app = FastAPI()

@app.get("/api/hello")
async def hello():
    return {"message": "Hello World"}

@app.post("api/test")
async def test(payload: str):
    client = Client("https://ankush-003-ankush-003-nosqli-identifier.hf.space/")    
    result = client.predict(
                    "Howdy!",	# str  in 'Enter Username' Textbox component
                    "Howdy!",	# str  in 'Enter Password' Textbox component
                    "Malitious",	# str (Option from: ['Malitious', 'Benign']) in 'Expected' Dropdown component
                    payload,	# str  in 'Enter Payload' Textbox component
                    api_name="/predict"
    )
    return {"result": result}