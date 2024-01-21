import IngredientProvider from "./Context/IngredientContext";
import HomePage from "./Pages/Homepage";

function App() {
  return (
    <IngredientProvider>
      <HomePage />
    </IngredientProvider>
  );
}

export default App;
