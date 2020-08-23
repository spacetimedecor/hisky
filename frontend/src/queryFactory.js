import gql from 'graphql-tag'

export default (queryType, args) => {

    switch(queryType){
        case "tokenAuth":
            return gql`
                mutation {
                    tokenAuth(username:${args.username}, password: ${args.password}){
                        token
                    }
                }
            `
        case "register":
            return gql`                
                mutation {
                    register (email: ${args.email}, password: ${args.password}, username: ${args.username}, firstname: ${args.firstname}, lastname: ${args.lastname}) {
                        message
                    }
                }
            `
    }


}
