import "reflect-metadata";
import {bootstrapGraphQLSchema} from "./core/type-graphql";
import {bootstrapApollo, createApolloServer} from "./core/apollo";

const run = async () => {
    const apolloServer = createApolloServer(await bootstrapGraphQLSchema())
    const app = bootstrapApollo(apolloServer);

    app.listen('8088', () => {
        console.log('App is Running!')
    })
}

run();
