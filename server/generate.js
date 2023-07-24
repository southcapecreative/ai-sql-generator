import openaiClient from "./api.js";

const generate = async (queryDescription) => {
  try {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`,
      max_tokens: 100,
      temperature: 0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(`Error in generate function: ${error}`);
    throw error;
  }
};

export default generate;
