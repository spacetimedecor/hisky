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
