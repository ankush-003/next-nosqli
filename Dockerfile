FROM node:lts
RUN apt-get update || : && apt-get install python3 -y
RUN apt-get update || : && apt-get install python3-pip -y
RUN apt-get update || : && apt-get install python3-venv -y
WORKDIR /app
RUN python3 -m venv fast
RUN . fast/bin/activate
# RUN npm install -g pm2
COPY package*.json ./
COPY requirements.txt ./
RUN npm install
RUN fast/bin/pip install -r requirements.txt
COPY . .
COPY prisma ./prisma
RUN npx prisma generate
EXPOSE 3000
# ENV NODE_ENV="docker"
ENV DATABASE_URL="mongodb+srv://Ankush:ganya@learning.id5ibpg.mongodb.net/nosqli?retryWrites=true&w=majority"
ENV MONGODB_URI="mongodb+srv://Ankush:ganya@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority"
RUN npm run build
CMD ["npm", "run", "docker-start"]