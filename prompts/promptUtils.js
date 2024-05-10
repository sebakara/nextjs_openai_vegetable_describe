// file: /prompts/promptUtils.js
export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in generating informations on a vegetable.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a description and usability for a ${input}.`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_vegetable_information",
      description: "Generate a description and usability for a vegetable.",
      parameters: {
        type: "object",
        properties: {
          vegetableInformation: {
            type: "string",
            description: "The generated information on a vegetable",
          },
          description: {
            type: "string",
            description: "A description and usability of a vegatable",
          },
        },
        "required": ["vegetableInformation", "description"]
      },
    },
  ];
}