import {ApolloServer} from "apollo-server-express";
import express from "express";
import {GraphQLSchema} from "graphql";
import * as http from "http";

export const createApolloServer = (schema: GraphQLSchema): ApolloServer =>
    new ApolloServer({
        schema, playground: true,
        introspection: true
    })

export const bootstrapApollo = (apollo: ApolloServer) => {
    const app = express();
    apollo.applyMiddleware({
        app,
        path: '/api',
        cors: {
            origin: '*',
            methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
            credentials: true,
        }
    });

    return http.createServer(app);
}
