import { Queue } from 'bullmq';
import config from './../config';

const ytdlp = new Queue('ytdlp' , {connection : {
    host : config.REDIS_HOST,
    port : Number(config.REDIS_PORT)
}});

export default ytdlp