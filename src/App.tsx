import IngredientProvider from "./Context/IngredientContext";
import HomePage from "./Pages/home";

function App() {
  return (
    <IngredientProvider>
      <HomePage />
    </IngredientProvider>
  );
}

export default App;
