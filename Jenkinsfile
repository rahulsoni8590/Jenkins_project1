pipeline{
    agent any
    
    stages{

        stage('install Dependencies'){

            steps{

                sh 'npm install'

            }

        }

        stage('Run Tests'){

            steps{

                sh 'npm test'

            }

        }

    }
    
}