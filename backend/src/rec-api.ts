const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
  if (!apiKey) {
    throw new Error("API Key not found.");
  }

  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

  const queryPara = {
    apiKey,
    query: searchTerm,
    number: "10",
    offset: (page * 10).toString(),
  };
  url.search = new URLSearchParams(queryPara).toString();

  try {
    const searchResponse = await fetch(url);
    const resultsJson = await searchResponse.json();
    return resultsJson;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeSummary = async (recipeId: string) => {
  if (!apiKey) {
    throw new Error("API Key not found.");
  }
  const url = new URL(
    `https://api.spoonacular.com/recipes/${recipeId}/summary`
  );
  const params = {
    apiKey: apiKey,
  };
  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
// export const getRandom = async (page: number) => {
//   if (!apiKey) {
//     throw new Error("API Key not found.");
//   }

//   const url = new URL("https://api.spoonacular.com/recipes/random");

//   const Para = {
//     apiKey,
//     number: "10",
//     offset: (page * 10).toString(),
//   };
//   url.search = new URLSearchParams(Para).toString();

//   try {
//     const searchRes = await fetch(url);
//     const resultJson = await searchRes.json();
//     return resultJson;
//   } catch (error) {
//     console.log(error);
//   }
// };
