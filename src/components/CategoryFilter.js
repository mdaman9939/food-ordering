// CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={styles.container}>
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          style={{
            ...styles.categoryButton,
            backgroundColor: cat.id === selectedCategory ? "#f1c40f" : "#fff",
            borderColor: "#f1c40f",
            color: cat.id === selectedCategory ? "#fff" : "#333",
          }}
        >
          <div style={styles.circle}>
            <img src={cat.image} alt={cat.name} style={styles.categoryImage} />
          </div>
          <span style={styles.categoryText}>{cat.name}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "40px",
    display: "flex",
    overflowX: "auto",
    gap: "12px",
    padding: "10px",
    whiteSpace: "nowrap",
  },
  categoryButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    borderRadius: "20px",
    border: "2px solid",
    cursor: "pointer",
    minWidth: "100px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
  },
  circle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "8px",
    border: "2px solid #f1c40f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  categoryText: {
    marginTop: "4px",
  },
};

export default CategoryFilter;
