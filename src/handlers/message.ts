import { WASocket } from "baileys";
import { FormattedMessage } from "../utils/message";

const MessageHandler = async (bot: WASocket, message: FormattedMessage) => {
    if(message.content === 'Oi!') {
        await bot.sendMessage(message.key.remoteJid!, { text: 'Olá! Aqui quem fala é o bot!' })
    }
}

export default MessageHandler;