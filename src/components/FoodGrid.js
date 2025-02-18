import React from "react";

const FoodGrid = ({ foods, addToCart }) => {
  return (
    <div style={styles.foodGrid}>
      {foods.length > 0 ? (
        foods.map((food) => (
          <div key={food.id} style={styles.foodItem}>
            <img src={food.image} alt={food.name} style={styles.foodImage} />
            <h3 style={styles.foodName}>{food.name}</h3>
            <p style={styles.foodPrice}>${food.price}</p>
            <button
              onClick={() => addToCart(food)}
              style={styles.addToCartButton}
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p style={styles.noItems}>No food items found.</p>
      )}
    </div>
  );
};

// Inline CSS styles for FoodGrid
const styles = {
  foodGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px", // Space between items
    padding: "5px",
  },
  foodItem: {
    flex: "1 1 calc(50% - 20px)", // Two items per row with gap
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box", // Ensure padding is included in width
  },
  foodImage: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  foodName: {
    fontSize: "18px",
    margin: "10px 0",
    color: "#333",
  },
  foodPrice: {
    fontSize: "16px",
    color: "#555",
    margin: "5px 0",
  },
  addToCartButton: {
    padding: "10px 20px",
    backgroundColor: "#ffcc00",
    color: "#003366",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
  },
  noItems: {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
  },
};

export default FoodGrid;
