pipeline {
    agent any

    environment {
        // Mendefinisikan nama image agar mudah diubah jika perlu
        IMAGE_NAME = "jasitp-uhuy"
        CONTAINER_NAME = "running-jasitp-uhuy"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo "Membangun image Docker: ${IMAGE_NAME}"
                // Perintah untuk build image dari Dockerfile di direktori ini
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage('Deploy Docker Container') {
            steps {
                echo "Mendeploy container baru..."
                script {
                    // Blok script untuk logika yang lebih kompleks
                    // Cek apakah ada container dengan nama yang sama, lalu hentikan dan hapus
                    def oldContainer = sh(script: "docker ps -a -q --filter name=${CONTAINER_NAME}", returnStatus: true)
                    if (oldContainer == 0) {
                        echo "Container lama ditemukan, menghapus..."
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    } else {
                        echo "Tidak ada container lama."
                    }
                    
                    // Jalankan container baru dari image yang sudah di-build
                    sh "docker run -d --name ${CONTAINER_NAME} -p 8081:80 ${IMAGE_NAME}"
                }
            }
        }
    }
}