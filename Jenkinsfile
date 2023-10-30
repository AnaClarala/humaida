pipeline {
    agent any
    environment {
        GH_ORG = "atelier-diginamic"
        APP_REPO = "gdt-front"
        BACKEND_PROD = "https://transports-back.cleverapps.io"
    }
    stages {
        stage('install') {
          steps {
              sh 'npm install'
          }
        }
        stage('build') {
          steps {
              sh 'npm run prepare-prod'
              sh 'npm run build'
          }
        }
        stage('deploy') {
         when {
              branch 'master'
         }
         steps {
              sh 'npm run deploy'
         }
       }
    }
    post {
        success {
           slackSend channel: '#jenkins_nantes', color: 'good', message: "Succès ! ${env.JOB_NAME} commit ${env.GIT_COMMIT} https://${GH_ORG}.github.io/${APP_REPO}/"
        }
        failure {
            slackSend channel: '#jenkins_nantes', color: 'danger', message: "Oops ! ${env.JOB_NAME} commit ${env.GIT_COMMIT} (<${env.BUILD_URL}|Open>)"
        }
    }
}
