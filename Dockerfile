# 1️⃣ React 애플리케이션 빌드 단계
FROM node:22 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# 2️⃣ Nginx를 사용하여 정적 파일 서빙
FROM docker.io/library/nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
