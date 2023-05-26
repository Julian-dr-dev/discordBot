import { ExtendedClient } from "../structures/Client";
import {PermissionResolvable} from "discord.js";


interface RunOptions {
    client: ExtendedClient,
    interaction: CommandInteraction,
    args: commandInteractionOptionResolver
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    userPermissions ?: PermissionResolvable[];
    run: RunFunction;

} & ChatInputApplicationCommandData