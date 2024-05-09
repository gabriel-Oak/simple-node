import createContainer from "../../../../utils/container";
import IUserDatabaseDatasource from "./types";
import UserDatabaseDatasource from "./user-database-datasource";

const container = createContainer();
container
  .bind<IUserDatabaseDatasource>('UserDatabaseDatasource')
  .to(UserDatabaseDatasource);