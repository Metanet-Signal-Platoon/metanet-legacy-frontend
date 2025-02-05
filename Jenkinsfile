pipeline {
    agent any
    environment{
        CONTAINER_IMAGE = "docker.io/kdh3213/frontend:latest"
    }
    stages {
        stage('Jenkinsfile') {
            steps {
                echo "hello jenkins?"
            }
        }
        stage('Checkout') {
            steps {
                git branch: 'main',
                        credentialsId: 'github-app-jenkins',
                        url: 'https://github.com/Metanet-Signal-Platoon/metanet-legacy-frontend'
            }
        }
        stage('Build Npm') {
            steps {
                dir("./frontend") {
                    nodejs(nodeJSInstallationName: 'NodeJS') {
                        // CI=false 추가 및 npm install에 --legacy-peer-deps 옵션 추가
                        sh 'npm ci --legacy-peer-deps'
                    }
                }
            }
        }
    }
}