const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

function sizeToPrice(size) {
  switch (size) {
    case "S":
      return '10" ';
    case "M":
      return '15" ';
    case "L":
      return '20" ';
    default:
      throw new Error("Unknown size: " + size);
  }
}

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (const item of cart) {
    total += item.pizza.sizes[item.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{sizeToPrice(item.size)}</span> -
            <span className="type">{item.pizza.name}</span> -
            <span className="price">{item.price}</span> -
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
