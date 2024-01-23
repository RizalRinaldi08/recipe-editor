import React, { useEffect, useState } from "react";
import { useIngredient } from "../../Context/IngredientContext";

const TopForm = () => {
  const [measure, setMeasure] = useState<number[]>([]);

  const { ingredient } = useIngredient();

  useEffect(() => {
    const arrM = ingredient.map((item) => item.measure);
    const arrMeasure = arrM.map((item) => {
      let result = 0;
      if (item.includes("oz")) {
        console.log("ini oz ");
        const oz = item.split("oz")[0];
        if (Number.isNaN(Number(oz))) {
          const newOz = oz.split("/");
          result = Number(newOz[0]) / Number(newOz[1]);
        } else {
          result = Number(oz);
        }
      } else if (item.includes("Juice of")) {
        const juice = item.split("Juice of ")[1];

        if (Number.isNaN(Number(juice))) {
          const newOz = juice.split("/");
          result = Number(newOz[0]) / Number(newOz[1]);
          console.log("newOz", newOz[0], newOz[1]);
        } else {
          result = Number(juice);
          console.log("juice", juice.split("/")[0]);
        }
        // console.log("resultj");
      } else if (item.includes("tsp")) {
        console.log("ini tsp ");
        const tsp = item.split("tsp")[0];
        if (Number.isNaN(Number(tsp))) {
          const newOz = tsp.split("/");
          result = Number(newOz[0]) / Number(newOz[1]);
        } else {
          result = Number(tsp);
        }
      } else {
        0;
      }
      console.log("result", result);

      return result;
    });
    console.log("ArrMeasure", arrMeasure);
    setMeasure(arrMeasure);
  }, [ingredient]);
  console.log(measure);

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
      {measure.length > 0 && (
        <div className="font-bold absolute bottom-0 right-0 pb-3 pr-5">
          <h5>Total Ingredients : {measure.reduce((acc, item) => acc + item, 0)}</h5>
        </div>
      )}
    </div>
  );
};

export default TopForm;
