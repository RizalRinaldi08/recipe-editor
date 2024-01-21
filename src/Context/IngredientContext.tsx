import { createContext, useContext, useState } from "react";

type ContextIngredient = {
  ingredient: ingredient[];
  updateIngredient: (newData: ingredient[]) => void;
};

const IngredientContext = createContext<ContextIngredient>({
  ingredient: [],
  updateIngredient: () => {},
});

const IngredientProvider = ({ children }: { children: children }) => {
  const [ingredient, setIngredient] = useState<ingredient[]>([
    {
      name: "Kopu",
      measure: "2",
    },
    {
      name: "Kop1",
      measure: "2",
    },
    {
      name: "Kopi",
      measure: "3",
    },
  ]);

  const updateIngredient = (newData: ingredient[]) => {
      setIngredient( newData);
  }



  return <IngredientContext.Provider value={{ ingredient: ingredient, updateIngredient  }}>{children}</IngredientContext.Provider>;
};

export const useIngredient = () => {
  return useContext(IngredientContext);
};

export default IngredientProvider;
