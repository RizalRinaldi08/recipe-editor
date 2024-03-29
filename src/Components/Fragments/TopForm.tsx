// import React, { useEffect, useState } from "react";
import { useIngredient } from "../../Context/IngredientContext";

const TopForm = () => {
  // const [measure, setMeasure] = useState<number[]>([]);

  const { ingredient } = useIngredient();
  console.log("gin", ingredient);

  return (
    <div className="relative artboard artboard-horizontal bg-white w-[500px] h-[200px] py-5 px-3">
      <div className="overflow-y-auto h-4/5">
        <table className="w-80">
          <tbody>
            {ingredient.map((item, index) => {
              if (item.name === undefined) return null;

              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.measure}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {ingredient.length > 0 && (
        <div className="font-bold absolute bottom-0 right-0 pb-3 pr-5">
          <h5>Total Ingredients : {ingredient.reduce((a, b) => a + b.measure, 0)}</h5>
        </div>
      )}
    </div>
  );
};

export default TopForm;
