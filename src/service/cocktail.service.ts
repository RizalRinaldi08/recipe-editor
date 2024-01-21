import axios from "axios";

export const getCocktail = (keyword: string, callback: (status: boolean, res: any) => void) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
  console.log(url);
  axios(url)
    .then((res) => {
      callback(true, res.data.drinks);
    })
    .catch((err) => {
      callback(false, err);
      console.log(err);
    });
};
