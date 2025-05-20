import { WASocket } from "baileys";
import { FormattedMessage } from "../utils/message";
import PresenceHandler from "./presence";

const MessageHandler = async (bot: WASocket, message: FormattedMessage) => {
    if(message.content?.startsWith('!')) {
        PresenceHandler(bot, message);
    }
}

export default MessageHandler;