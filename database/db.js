import {Sequelize} from "sequelize";

const db = new Sequelize('app', 'root', 'r00t', {
    host:'172.16.20.149',
    dialect:'mysql'
})

export default db