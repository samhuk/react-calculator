FROM node

RUN apk add --no-cache make gcc g++ python

COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /dist /app
WORKDIR /app/server/main/
