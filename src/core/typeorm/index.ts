import {createConnection, Connection, ConnectionOptions, useContainer} from "typeorm";
import {Container} from "typedi";
import {getOptionsForConnectionName} from "./connection-list";
import {AppEntities, BOUNDARY_APP_NAME} from "../../entities";

const connectionList: Connection[] = [];

const buildConnection = async (service: string,
                               targetConnection: string,
                               entities: any,
                               synchronize?: boolean): Promise<Connection> => {

    const targetEnvConnection = getOptionsForConnectionName(targetConnection);

    let shouldSync = false;

    if (targetEnvConnection.synchronize || synchronize) {
        shouldSync = true;
    }

    const finalOptions: ConnectionOptions = {
        ...targetEnvConnection,
        name: service,
        entities,
        synchronize: shouldSync,
        logger: "advanced-console",
        logging: true
    }

    return await createConnection(finalOptions)
}

export const bootstrapDatabase = async (

): Promise<Connection[]> => {
    useContainer(Container, {fallbackOnErrors: true});

    const boundaryConnection = await buildConnection(
        BOUNDARY_APP_NAME,
        `boundary_app_${process.env.NODE_ENV}`,
        AppEntities,
        false
    )

    connectionList.push(boundaryConnection);

    return connectionList;
}
