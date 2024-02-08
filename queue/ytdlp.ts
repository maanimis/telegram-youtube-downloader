import { Queue } from 'bullmq';
import dotenv from "dotenv"
import config from '../config';

dotenv.config({path : './../.env'})

const ytdlp = new Queue('ytdlp' , {connection : {
    host : config.REDIS_HOST,
    port : Number(config.REDIS_PORT)
}});

export default ytdlp