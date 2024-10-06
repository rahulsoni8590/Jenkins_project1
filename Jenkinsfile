pipeline{
    agent any
    
    stages{

        stage('install Dependencies'){

            steps{

                bat 'npm install'

            }

        }

        stage('Run Tests'){

            steps{

                bat 'npm test'

            }

        }

    }
    
}