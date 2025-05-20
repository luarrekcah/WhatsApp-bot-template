import { WASocket } from "baileys";
import { FormattedMessage } from "../utils/message";

const PresenceHandler = async (bot: WASocket, message: FormattedMessage) => {
    if(message.content === '!lista') {
        await bot.sendMessage(message.key.remoteJid!, { text: '!lista command works' })
    }
}

export default PresenceHandler;