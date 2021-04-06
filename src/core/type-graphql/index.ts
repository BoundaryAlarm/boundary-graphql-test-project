import {GraphQLSchema} from "graphql";
import {buildSchema} from "type-graphql";
import {Container} from "typedi";
import {AuthResolver, ProductsResolver, PurchasesResolver, UsersResolver} from "../../resolvers";

export const bootstrapGraphQLSchema = async (): Promise<GraphQLSchema> => {
    return await buildSchema({
        container: Container,
        resolvers: [
            AuthResolver,
            ProductsResolver,
            PurchasesResolver,
            UsersResolver
        ],
        validate: false,
    });
}
