import { Composer } from "grammy/mod.ts";

import config from "../../env.ts";
import { genBot } from "../helpers/genBot.ts";

const composer = new Composer();

composer.on("msg:text").filter(
  (ctx) => ctx.msg.forward_from?.username?.toLowerCase() === "botfather",
  async (ctx) => {
    const entities = ctx.message?.entities;
    const msgText = ctx.message?.text || "";
    const reply = await ctx.reply("Generating a clone.. Please wait..");
    // extract bot token
    const bot_token = extractBotToken(msgText, entities);
    if (bot_token !== undefined) {
      // Create an instance of the `Bot` class and pass your authentication token to it.
      const bot = await genBot(bot_token);
      if (bot) {
        try {
          // get the current bots webhook and extract domain
          const webhookInfo = await ctx.api.getWebhookInfo();
          const domain = webhookInfo.url?.split(config.WEBHOOK_PATH)[0];
          await bot.api.setWebhook(
            `${domain}${config.WEBHOOK_PATH}?token=${bot_token}`,
          );
        } catch (e) {
          console.error(e);
        }
      }
      await ctx.api.editMessageText(
        ctx.chat!.id,
        reply.message_id,
        `Successfully created a clone on @${bot.botInfo.username}!`,
      );
    }
  },
);

// deno-lint-ignore no-explicit-any
function extractBotToken(msgText: string, entities: any): string | undefined {
  // https://github.com/wjclub/telegram-bot-tokenextract/pull/1
  for (const entity_ in entities) {
    const entity = entities[Number(entity_)];
    if (entity.type == "code") {
      return msgText?.substring(
        entity.offset,
        entity.offset + entity.length,
      );
    }
  }
}

export default composer;
