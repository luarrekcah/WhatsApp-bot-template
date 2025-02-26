import { proto, WAMessage } from "baileys";
import { logger } from "./logger";

export type FormattedMessage = {
  key: proto.IMessageKey;
  messageTimestamp: Number | Long | null;
  pushName: string | null;
  content: string | null;
};

/**
 * @param message
 * @returns a message vindo do Baileys para algo mais amigável.
 */
export const getMessage = (message: WAMessage) => {
  try {
    return {
      key: message.key,
      messageTimestamp: message.messageTimestamp,
      pushName: message.pushName,
      content:
        message.message?.conversation ||
        message.message?.extendedTextMessage?.text,
    };
  } catch (error) {
    logger.error(error);
  }
};
