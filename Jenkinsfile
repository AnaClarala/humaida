pipeline {
    agent any
    environment {
        GH_ORG = "atelier-diginamic"
        APP_REPO = "gdt-front"
        BACKEND_PROD = "https://transports-back.cleverapps.io/"
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
           discordSend description: "${BUILD_URL}", footer: 'Succès', image: '', link: '', result: 'SUCCESS', thumbnail: '', title: "Succès ! ${env.JOB_NAME} commit ${env.GIT_COMMIT}", webhookURL: "${DISCORD_WEBHOOK_URL}"
           slackSend channel: '#jenkins_nantes', color: 'good', message: "Succès ! ${env.JOB_NAME} commit ${env.GIT_COMMIT} (<${env.BUILD_URL}|Open>)"
        }
        failure {
           discordSend description: "${BUILD_URL}", footer: 'Échec', image: '', link: '', result: 'FAILURE', thumbnail: '', title: "Oops ! ${env.JOB_NAME} commit ${env.GIT_COMMIT}", webhookURL: "${DISCORD_WEBHOOK_URL}"
           slackSend channel: '#jenkins_nantes', color: 'danger', message: "Oops ! ${env.JOB_NAME} commit ${env.GIT_COMMIT} (<${env.BUILD_URL}|Open>)"
        }
    }
}
