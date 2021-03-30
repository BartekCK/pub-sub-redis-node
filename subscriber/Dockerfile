FROM node:14.16.0-alpine AS build
WORKDIR /application
COPY ./src ./src
COPY package.json .
COPY tsconfig.json .
RUN npm install
RUN npm run build

FROM node:14.16.0-alpine
WORKDIR /application
COPY --from=build /application/build ./build
COPY package.json .
RUN npm install --only=production
EXPOSE 3001
CMD ["npm", "start"]
