import "reflect-metadata";

import {bootstrapGraphQLSchema} from "./core/type-graphql";
import {bootstrapApollo, createApolloServer} from "./core/apollo";
import {bootstrapDatabase} from "./core/typeorm";

const run = async () => {
    await bootstrapDatabase();

    const apolloServer = createApolloServer(await bootstrapGraphQLSchema())
    const app = bootstrapApollo(apolloServer);

    app.listen('8088', () => {
        console.log('App is Running!')
    })
}

run();
