import {ConnectionOptions} from "typeorm";

const connectionList: ConnectionOptions[] = [
    {
        name: 'boundary_app_production',
        type: 'postgres',
        database: 'boundary_app',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        schema: process.env.DB_SCHEMA,
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
        host: process.env.DB_HOST,
        synchronize: false,
        dropSchema: false,
        uuidExtension: 'pgcrypto',
    },
    {
        name: 'boundary_app_development',
        type: 'postgres',
        database: 'postgres',
        username: 'postgres',
        password:'postgres',
        schema: 'boundary_app',
        port: 5432,
        host: 'localhost',
        synchronize: true,
        dropSchema: true,
        uuidExtension: 'pgcrypto',
    }
]

export const getOptionsForConnectionName = (
    connectionName: string
): ConnectionOptions => {
    const connections = connectionList.filter(c => c.name === connectionName);

    if (connections.length > 1) {
        throw new Error(
            `Too many connections called ${connectionName} were found, please fix the connectionList configuration to only contain unique names`
        );
    } else if (connections.length === 0) {
        throw new Error(
            `There were no connections with the name ${connectionName} found`
        );
    }

    return connections[0];
};
