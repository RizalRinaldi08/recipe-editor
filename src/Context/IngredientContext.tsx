import { createContext, useContext, useState } from "react";

type ContextIngredient = {
  ingredient: ingredient[];
  updateIngredient: (prev: ingredient[]) => void;
};

const IngredientContext = createContext<ContextIngredient>({
  ingredient: [],
  updateIngredient: () => {},
});

const IngredientProvider = ({ children }: { children: children }) => {
  const [ingredient, setIngredient] = useState<ingredient[]>([]);

  const updateIngredient = (newData: ingredient[]) => {
    setIngredient(newData);
  };

  return <IngredientContext.Provider value={{ ingredient: ingredient, updateIngredient }}>{children}</IngredientContext.Provider>;
};

export const useIngredient = () => {
  return useContext(IngredientContext);
};

export default IngredientProvider;
