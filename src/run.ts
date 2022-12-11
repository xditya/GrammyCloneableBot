import { serve } from "server";
import { webhookCallback } from "grammy/mod.ts";

import config from "../env.ts";
import composer from "./modules/mod.ts";
import { genBot } from "./helpers/genBot.ts";

serve(async (req) => {
  if (req.method === "POST") {
    const url = new URL(req.url);
    if (url.pathname.slice(1) === config.WEBHOOK_PATH) {
      try {
        const token = url.searchParams.get("token");
        if (!token) return;
        const current_bot = await genBot(token);
        if (!current_bot) return;
        current_bot.use(composer);
        return await webhookCallback(current_bot, "std/http")(req);
      } catch (error) {
        return new Response("Error " + error.message);
      }
    }
  }
  return new Response("Server is UP!");
});
