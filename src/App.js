import React, { useEffect, useState } from "react";
import "./App.css";
import CategoryFilter from "./components/CategoryFilter";
import FoodGrid from "./components/FoodGrid";
import Navbar from "./components/Navbar";

const categories = [
  {
    id: "1",
    name: "Biryani",
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "2",
    name: "Curry",
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "3",
    name: "Ramen",
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "4",
    name: "Teppanyaki",
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "5",
    name: "Desserts",
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
];

// Dummy food items
const allFoods = [
  {
    id: "f1",
    name: "Miso-Glazed Cod",
    price: 8.95,
    category: "2", // Curry
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "f2",
    name: "Tantanmen Beef",
    price: 9.85,
    category: "3", // Ramen
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA9LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "f3",
    name: "Chicken Dum Biryani",
    price: 8.95,
    category: "1", // Popular
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "f4",
    name: "Veg Biryani",
    price: 11.5,
    category: "1", // Popular
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "f4",
    name: "Paneer Biryani",
    price: 11.5,
    category: "1", // Popular
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "f4",
    name: "Egg Biryani [2 Eggs]",
    price: 11.5,
    category: "1", // Popular
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "f5",
    name: "Veg Teppanyaki",
    price: 7.5,
    category: "4", // Teppanyaki
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM3/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
  {
    id: "f6",
    name: "Chocolate Cake",
    price: 4.0,
    category: "5", // Desserts
    image:
      "https://imgs.search.brave.com/yHmg-NVl13RcuIxd9EBTk7qab-dfEjkMRNgZASui0Lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzMxLzM3LzA5/LzM2MF9GXzkzMTM7/MDk2MV91TGFydkJR/UVlpUk9zOGR2amVH/aGNYdmtRd09ORVND/Ty5qcGc",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [cart, setCart] = useState([]);

  // Load cart from local storage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Filter foods based on selected category
  const filteredFoods = allFoods.filter(
    (food) => food.category === selectedCategory
  );

  // Function to add a single food item to the cart
  const addToCart = (food) => {
    setCart((prevCart) => [...prevCart, food]);
  };

  // Function to remove a food item from the cart
  const removeFromCart = (foodId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== foodId));
  };

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Handle checkout button click
  const handleCheckout = () => {
    alert("Checkout successful! Thank you for your purchase.");
    setCart([]);
  };

  return (
    <div style={styles.app}>
      <Navbar />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />
      <FoodGrid foods={filteredFoods} addToCart={addToCart} />
      <div style={styles.cart}>
        <h2 style={styles.cartHeader}>Cart</h2>
        <ul style={styles.cartList}>
          {cart.map((item) => (
            <li key={item.id} style={styles.cartItem}>
              {item.name} - ${item.price}
              <button
                onClick={() => removeFromCart(item.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</p>
        <button onClick={handleCheckout} style={styles.checkoutButton}>
          Checkout
        </button>
      </div>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  cart: {
    marginTop: "20px",
    padding: "10px",
    margin:'0 0 0 0',
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  cartHeader: {
    marginBottom: "10px",
    fontSize: "24px",
    color: "#003366",
  },
  cartList: {
    listStyleType: "none",
    padding: "0",
  },
  cartItem: {
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
    fontSize: "18px",
    color: "#555",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#ffcc00",
    color: "#003366",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  totalPrice: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#003366",
  },
  checkoutButton: {
    padding: "10px 20px",
    backgroundColor: "#ffcc00",
    color: "#003366",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  foodGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1px", // Adds space between the items
  },
  foodItem: {
    flex: "1 1 80%", // This makes each item take 45% of the container width
    margin: "5px 0",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "1px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
};

export default App;
