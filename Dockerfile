FROM node:gallium as builder

WORKDIR /app/build
COPY . .
RUN npm install
RUN npm run build

FROM gcr.io/distroless/nodejs18-debian11

COPY --from=builder /app/build /app/src

EXPOSE 3000

CMD ["npm","start"]
