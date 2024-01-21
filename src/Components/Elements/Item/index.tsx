import React from "react";

interface iProps {
  ingredient: { name: string; measure: string };

  changeIngredient: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Item = ({ ingredient, changeIngredient }: iProps) => {
  return (
    <div className="flex gap-5 mt-1">
      <input onChange={changeIngredient} value={ingredient.name} type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
      <input value={ingredient.measure} type="text" placeholder="XX" className="input input-bordered w-[100px] max-w-xs" />
    </div>
  );
};

export default Item;
