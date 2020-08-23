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
    }


}
