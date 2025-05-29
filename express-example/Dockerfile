## Stage 1 -- Build Stage
FROM node:22-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .

# --- Stage 2 -- Production
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
ENV PORT=3000
CMD ["node", "index.js"]