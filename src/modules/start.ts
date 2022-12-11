import { Composer } from "grammy/mod.ts";

const composer = new Composer();

composer.command("start", async (ctx) => {
  await ctx.reply("Hi, I'm online!");
});

export default composer;
