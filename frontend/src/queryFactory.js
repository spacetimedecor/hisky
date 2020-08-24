import gql from 'graphql-tag'

export default (queryType) => {

    switch(queryType){
        // case "tokenAuth":
        //     return gql`
        //         mutation {
        //             tokenAuth(username:${args.username}, password: ${args.password}){
        //                 token
        //             }
        //         }
        //     `
        case "register":
            return gql`mutation (
                $email: String!,
                $password: String!,
                $username: String!,
                $firstname: String,
                $lastname: String
            )
            {
                register(
                    email: $email,
                    password: $password,
                    username: $username,
                    firstname: $firstname,
                    lastname: $lastname
                ){
                    message
                }
            }`
    }
}
