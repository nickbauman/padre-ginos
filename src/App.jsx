import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Four Cheese"
        description="Tomato, mozzarella, and basil"
        image={"/public/pizzas/four_cheese.webp"}
      />

      <Pizza
        name="Pepperoni"
        description="Tomato, mozzarella, and pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />

      <Pizza
        name="Vegetarian"
        description="Tomato, mozzarella, and vegetables"
        image={"/public/pizzas/ital_veggie.webp"}
      />

      <Pizza
        name="Hawaiian"
        description="Tomato, mozzarella, ham, and pineapple"
        image={"/public/pizzas/hawaiian.webp"}
      />

      <Pizza
        name="Calabrese"
        description="BBQ sauce, chicken, and mozzarella"
        image={"/public/pizzas/calabrese.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
