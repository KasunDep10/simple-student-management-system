import mysql, {Pool} from 'mysql';
import env from 'dotenv';

env.config();

export let datasource:Pool;

(async function (){
    datasource=await mysql.createPool({
        host:process.env.DB_HOST,
        port:+process.env.DB_PORT!,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        connectionLimit:+process.env.DB_CP_SIZE!
    });
})();