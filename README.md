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
## Screenshots
![Home](https://github.com/ankush-003/next-nosqli/assets/94037471/f2b79328-0755-4bf9-8416-37dae4c8d7a7)
