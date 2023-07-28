FROM node:lts
RUN apt-get update || : && apt-get install python3 -y
RUN apt-get -y install python3-pip
RUN apt-get -y install python3-venv
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
RUN npm run build
EXPOSE 3000
ENV DATABASE_URL="mongodb+srv://Ankush:ganya@learning.id5ibpg.mongodb.net/nosqli?retryWrites=true&w=majority"
ENV MONGODB_URI="mongodb+srv://Ankush:ganya@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority"
CMD ["npm", "run", "docker-start"]