import { Bot } from "grammy/mod.ts";

import config from "../env.ts";
import composer from "./modules/mod.ts";

// we set up a test instance for the bot, using the BOT_TOKEN provided in the .env file.

const bot = new Bot(config.BOT_TOKEN);
await bot.init();
console.info(`Started as @${bot.botInfo.username}`);

bot.use(composer);

bot.start({
  drop_pending_updates: true,
  allowed_updates: ["message"],
});

Deno.addSignalListener("SIGINT", () => bot.stop());
Deno.addSignalListener("SIGTERM", () => bot.stop());
