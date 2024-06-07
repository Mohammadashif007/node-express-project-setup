import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const db_url = process.env.DB_URL;

export default { port, db_url };
