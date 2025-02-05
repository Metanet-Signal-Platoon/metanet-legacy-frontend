# 1️⃣ React 애플리케이션 빌드 단계
FROM node:22 AS builder
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps
# RUN npm install ajv --save-dev --legacy-peer-deps 
# RUN npm install ajv@6 ajv-keywords@3 

COPY . .
RUN npm run build

# 2️⃣ Nginx를 사용하여 정적 파일 서빙
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# 커스텀 Nginx 설정 파일 교체
COPY default.conf /etc/nginx/conf.d/default.conf

# 빌드된 React 파일을 Nginx의 정적 파일 경로로 복사
COPY --from=builder /app/build .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
