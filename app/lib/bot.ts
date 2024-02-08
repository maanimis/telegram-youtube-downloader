import { FluentContextFlavor} from "@grammyjs/fluent";
import { Bot , Context} from "grammy";
import dotenv from 'dotenv'
import config from '../../config';

dotenv.config({path : './../../.env'})
type MyAppContext = Context & FluentContextFlavor;
export const bot = new Bot<MyAppContext>(String(config.BOT_TOKEN) , {
    client: {
        apiRoot: config.apiRoot,
    },
});