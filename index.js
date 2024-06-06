import { Client, Events } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: 3276799,
});

client.on(Events.ClientReady, async () => {
  console.log(`Conectado como ${client.user.username}`);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.content == "$presentate")
    message.reply(
      "¡Hola! Soy el bot de Discord de la Liga Academy Goal! de Inazuma Eleven. Todavía estoy en fase de desarrollo, ¡tranquilidad que iré creciendo poco a poco!"
    );

  if (message.content.includes("33") && !message.content.includes("<"))
    message.reply(
      "¿Como? ¿Me repites ese numerín?"
    );

  if (message.content === "$ganador") {
    const members = await message.guild.members.fetch();
    const memberArray = members
      .filter((member) => !member.user.bot)
      .map((member) => member.user);
    const winner = memberArray[Math.floor(Math.random() * memberArray.length)];

    message.reply(
      `Y el ganador de la liga es... ¡<@${winner.id}>! ¡Enhorabuena!`
    );
  }

  if (message.content === "$ultimo") {
    const members = await message.guild.members.fetch();
    const memberArray = members
      .filter((member) => !member.user.bot)
      .map((member) => member.user);
    const winner = memberArray[Math.floor(Math.random() * memberArray.length)];

    message.reply(
      `Y el último de la liga es... <@${winner.id}>. Toca ponerse las pilas...`
    );
  }

  if (message.content === "$goleador") {
    const goleadores = [
      "Willy Glass",
      "Nelly Raimon",
      "Soji Okita",
      "Bai Long",
      "Edgar Partinus",
      "Kozoumaru",
      "Petronio Patti",
      "Mizukamiya",
      "Perseus",
      "Beta",
    ];
    const goleador = goleadores[Math.floor(Math.random() * goleadores.length)];
    message.reply(
      `Y el máximo goleador de la liga es... ¡**${goleador}**! ¡Buena puntería!`
    );
  }
});

client.login(process.env.BOT_TOKEN);
