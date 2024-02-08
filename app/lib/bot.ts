import { FluentContextFlavor} from "@grammyjs/fluent";
import { Bot , Context} from "grammy";
import config from './../../config';

type MyAppContext = Context & FluentContextFlavor;
export const bot = new Bot<MyAppContext>(String(config.BOT_TOKEN) , {
    client: {
        apiRoot: config.apiRoot,
    },
});