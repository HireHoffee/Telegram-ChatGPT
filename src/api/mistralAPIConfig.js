import { Mistral } from "@mistralai/mistralai";
import * as dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.MISTRAL_API_KEY;
const client = new Mistral({ apiKey: apiKey });

async function chatRequestTextMistral(content) {
  const result = await client.chat.complete({
    messages: content,
    model: "mistral-small-2506",
  });

  return result.choices[0].message.content.trim();
}

export { chatRequestTextMistral };
