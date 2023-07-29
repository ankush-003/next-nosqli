# Next-NoSQLi

This repository contains a web app that helps to understand NoSQL injection and how to protect websites against it. The app is built using Next.js and is deployed on Vercel.

The app includes the following features:

- A tutorial on NoSQL injection
- A tool to test websites for NoSQL injection vulnerabilities
- A guide on how to prevent NoSQL injection

The app is intended to be a educational resource for developers who want to learn more about NoSQL injection and how to protect their websites from it.

## Run Locally
after cloning the repository run the following commands
```bash
npm install
# for linux systems
npm run dev
# for windows systems
npm run dev-win
```
head over to http://localhost:3000/
## Run locally using Docker
- installing [Docker](https://docs.docker.com/get-docker/)
- [DockerHub Image](https://hub.docker.com/repository/docker/ankush003/next-nosqli/general)
```bash
docker pull ankush003/next-nosqli
docker run -dp 3000:3000 ankush003/next-nosqli
```
head over to http://localhost:3000/

## Backend Services
- [deta space discovery](https://deta.space/discovery/@ankush-003/nosqlidetector)
- use in your project: https://nosqlidetector-1-t9082585.deta.app/api/docs
- [Gradio App](https://ankush-003-ankush-003-nosqli-identifier.hf.space/) on 🤗Spaces
- use in your project:
> python
```bash
pip install gradio_client
```
```python
from gradio_client import Client

client = Client("https://ankush-003-ankush-003-nosqli-identifier.hf.space/")
result = client.predict(
				"Howdy!",	# str  in 'Enter Username' Textbox component
				"Howdy!",	# str  in 'Enter Password' Textbox component
				"Malicious",	# str (Option from: ['Malicious', 'Benign']) in 'Expected' Dropdown component
				"Howdy!",	# str  in 'Enter Payload' Textbox component
				api_name="/predict"
)
print(result)
```
> javascript
```bash
npm i -D @gradio/client
```
```js
import { client } from "@gradio/client";

const app = await client("https://ankush-003-ankush-003-nosqli-identifier.hf.space/");
const result = await app.predict("/predict", [		
				"Howdy!", // string  in 'Enter Username' Textbox component		
				"Howdy!", // string  in 'Enter Password' Textbox component		
				"Malicious", // string (Option from: ['Malicious', 'Benign']) in 'Expected' Dropdown component		
				"Howdy!", // string  in 'Enter Payload' Textbox component
	]);

console.log(result.data);
```
## Screenshots
![Home](https://github.com/ankush-003/next-nosqli/assets/94037471/f2b79328-0755-4bf9-8416-37dae4c8d7a7)

