import { Bot } from "grammy/mod.ts";

const botsList = new Map<string, Bot>();

export async function genBot(token: string) {
  let bot = botsList.get(token);
  if (!bot) {
    bot = new Bot(token);
    await bot.init();
    botsList.set(token, bot);
  }
  return bot;
}
