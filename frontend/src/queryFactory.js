import gql from 'graphql-tag'

export default (queryType) => {

    switch(queryType){
        case "login":
            return gql`mutation(
                $username: String!,
                $password: String!
            ) 
            {
                login(
                    username: $username, 
                    password: $password
                ){
                    token
                }
            }`
        case "register":
            return gql`mutation (
                $firstname: String,
                $lastname: String,
                $username: String!,
                $email: String!,
                $password: String!,
            )
            {
                register(
                    firstname: $firstname,
                    lastname: $lastname
                    username: $username,
                    email: $email,
                    password: $password,
                ){
                    message
                }
            }`
    }
}
