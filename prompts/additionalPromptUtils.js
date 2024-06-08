export function getAdditionalSystemPrompt() {
    return {
      role: "system",
      content: "You are an expert in nutrition and dietary planning. Provide comprehensive information about vegetables.",
    };
  }
  
  export function getAdditionalFunctions() {
    return [
      {
        name: "provide_additional_info",
        description: "Provide additional information about a specific vegetable",
        parameters: {
          type: "object",
          properties: {
            foodsToAccompany: { type: "string", description: "Foods that accompany the vegetable" },
            foodsToAvoid: { type: "string", description: "Foods to avoid with the vegetable" },
            bestTimeToConsume: { type: "string", description: "Best time to consume the vegetable" },
            lifeConditionsToConsume: { type: "string", description: "Life conditions to consume the vegetable" },
          },
          required: ["foodsToAccompany", "foodsToAvoid", "bestTimeToConsume", "lifeConditionsToConsume"],
        },
      },
    ];
  }