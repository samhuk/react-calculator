FROM standard-node as build
COPY package*.json ./
RUN npm install --loglevel verbose
COPY . ./
RUN npm run build

FROM standard-node as release
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /dist /app
WORKDIR /app/server/main/
