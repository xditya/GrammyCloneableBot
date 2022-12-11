# CloneBot
Template repository for making clone-able telegram bots using [grammY](https://grammy.dev) telegram bot library.

# Variables
- `BOT_TOKEN` - A telegram bot token (for testing the bot when hosted locally).  
- `WEBHOOK_PATH` - The path to point the webhook domain to, eg: setting it as `CloneBot` would point the webhook to `https://<your-deploy-domain>/CloneBot?token=<token>`.
  
# Setting up
This repository can be deployed and tested right out of the box.
1. Deploy it on dash.deno.com (or wherever, just run it using webhooks).
2. Set the webhook for your main bot: `https://api.telegram.org/bot<token>/setWebhook?url=https://<your-deploy-domain>/<WEBHOOK_PATH>?token=<token>`.
3. Open the bot on telegram, it should now be responding to `/start`.
4. Forward a message with a bot's token from [@BotFather](https://BotFather.t.me/) to this bot and wait for the confirmation message!

In addition to that, you can test the bot locally using deno tasks: `deno task test`.

# Credits
- [Aditya](https://xditya.me) for [this template repository](https://github.com/xditya/GrammyCloneBot).
- [SpEcHiDe](https://www.shrimadhavuk.me/) for [IDNWB](https://github.com/SpEcHiDe/IDNWB).
- [grammY](https://github.com/grammyjs/) for [grammY](https://grammy.dev)!