import React from "react";

interface iProps {
  ingredient: { name: string; measure: number };

  changeNameIngredient: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeMeasureIngredient: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Item = ({ ingredient, changeNameIngredient, changeMeasureIngredient }: iProps) => {
  return (
    <div className="flex gap-5 mt-1">
      <input onChange={changeNameIngredient} value={ingredient.name} type="text" placeholder="Type here" className="input input-bordered text-center input-success w-full max-w-xs" />
      <input onChange={changeMeasureIngredient} value={ingredient.measure} type="number" placeholder="XX" className="input input-bordered w-full text-center max-w-xs" />
    </div>
  );
};

export default Item;
