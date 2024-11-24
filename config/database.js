import { Sequelize } from 'sequelize';
import path from 'path';
dotenv.config({ path: path.resolve('config', '.env') });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);

export default sequelize;
