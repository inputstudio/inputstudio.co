export default defineEventHandler(async (event) => {
  const { botApiKey, chatId } = useRuntimeConfig();
  const body = await readBody(event);

  if (Object.keys(body).length < 1) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please add at least one field',
    });
  }

  if (!botApiKey || !chatId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Missing environment variables',
    });
  }

  try {
    await $fetch(`https://api.telegram.org/bot${botApiKey}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: chatId,
        text:
          'We received a message !\n' +
          Object.keys(body).reduce((str, key) => (str += key + ': ' + body[key] + '\n'), ''),
      },
    });

    return { message: 'Message sended successfully !' };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Error while sending message',
    });
  }
});
