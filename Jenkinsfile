pipeline {
    agent any
    tools {
        nodejs("NodeJS")
    }

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
                //sh 'rm -rf oon_metanet-legacy-frontend_main oon_metanet-legacy-frontend_main@tmp'
                 dir("./oon_metanet-legacy-frontend_main") {
                    sh 'rm -rf node_modules'
                    sh 'rm package-lock.json'
                    sh 'npm cache clean --force'
                    sh 'npm install'
                    sh 'npm install ajv@latest ajv-keywords@latest'
                    sh 'CI=false npm run build'
                }
            }
        }
        // stage('Build React App') {
        //     steps {
        //         dir("./oon_metanet-legacy-frontend_main") {
                    
        //             sh 'CI=false npm run build'
        //         }
        //     }
        // }
        stage('Build Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                        ssh -o StrictHostKeyChecking=no root@192.168.0.13 '
                        echo "SSH Connection Successful"

                        export CONTAINER_IMAGE="${CONTAINER_IMAGE}"
                        export DOCKER_USER="${DOCKER_USER}"
                        export DOCKER_PASSWORD="${DOCKER_PASSWORD}"

                        cd /home/user/legacy/oon_metanet-legacy-frontend_main
                        
                        sudo podman build -t $CONTAINER_IMAGE .
                        echo $DOCKER_PASSWORD | sudo podman login -u $DOCKER_USER --password-stdin docker.io  # 안전한 로그인 방식
                        sudo podman push $CONTAINER_IMAGE
                        sudo podman rmi $CONTAINER_IMAGE # 기존 이미지 삭제
                        '
                        """
                    }
                }
            }
        }

    }
}