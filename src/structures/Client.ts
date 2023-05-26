import { Client } from "discord.js";


export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    constructor()
    {
        super({ intents: 32767});
    }

    start() {
        this.registerModules();
        this.login(process.env.botToken);

    }
    async registerModules() {


    }

}
