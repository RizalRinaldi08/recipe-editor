import React, { useEffect, useState } from "react";
import Item from "../Elements/Item";
import { getCocktail } from "../../service/cocktail.service";
import { useIngredient } from "../../Context/IngredientContext";

// type ingredient = { name: string; measure: string };
const BottomForm = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [ingredient, setIngredient] = useState<ingredient[]>([]);
  const { ingredient, updateIngredient } = useIngredient();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    console.log("searchResult", searchResult);
  }, [searchResult]);

  const handleSearch = () => {
    if (keyword) {
      setIsLoading(true);
      getCocktail(keyword, (status, res) => {
        if (status) {
          if (res != null) {
            // const data = res[0].map((item: any) => {
            //   console.log(item);
            // });
            if (res[0]) {
              const x = Object.entries(res[0]).map(([key, value]) => { 
                if (key === "strIngredient1") {
                  return { name: value, measure: res[0]["strMeasure1"] } as ingredient;
                }
              });
              updateIngredient(x as ingredient[]);
              console.log("inis", x);
            }

          } else {
            updateIngredient([]);
            console.log("null result");
          }
        }
        setIsLoading(false);
      });
    }
  };

  const changeIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    console.log(ingredient);
  }, [ingredient]);

  return (
    <div className="relative artboard artboard-horizontal bg-white w-[700px] h-[250px] rounded-3xl p-5">
      {isLoading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-spinner loading-sm"></span>}
      <div className="flex justify-center mb-5">
        <div className=" relative w-1/2">
          <input value={keyword} onChange={handleOnchange} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs pr-10 outline-none" />
          <button onClick={handleSearch} className="btn btn-primary absolute top-0 right-0 h-full">
            Search
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-[158px] ">
        {ingredient.length <= 0 && <p className="text-center">Drink Not Found</p>}
        {ingredient.map((item, index) => {
          // console.log("item", index);

          return <Item changeIngredient={changeIngredient} ingredient={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BottomForm;