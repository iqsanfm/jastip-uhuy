pipeline {
    agent any

    environment {
        // Mendefinisikan nama image dan container agar mudah diubah jika perlu
        IMAGE_NAME = "jasitp-uhuy"
        CONTAINER_NAME = "running-jasitp-uhuy"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo "Membangun image Docker: ${IMAGE_NAME}"
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Deploy Docker Container') {
            steps {
                echo "Mendeploy container baru..."
                script {
                    // Cek apakah ada container dengan nama yang sama dan ambil ID-nya
                    def oldContainerId = sh(
                        script: "docker ps -a -q --filter name=${CONTAINER_NAME}",
                        returnStdout: true
                    ).trim()

                    if (oldContainerId) {
                        echo "Container lama dengan ID ${oldContainerId} ditemukan, menghapus..."
                        sh "docker stop ${oldContainerId}"
                        sh "docker rm ${oldContainerId}"
                    } else {
                        echo "Tidak ada container lama dengan nama ${CONTAINER_NAME}."
                    }

                    echo "Menjalankan container baru..."
                    sh "docker run -d --name ${CONTAINER_NAME} -p 8081:80 ${IMAGE_NAME}"
                }
            }
        }
    }
}