import { Composer } from "grammy/mod.ts";

import start from "./start.ts";
import cloner from "./cloner.ts";

const composer = new Composer();

composer.use(start);
composer.use(cloner);

export default composer;
