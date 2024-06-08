

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in generating information on a vegetable.",
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
            description: "A description and usability of a vegetable",
          },
        },
        required: ["vegetableInformation", "description"],
      },
    },
  ];
}
