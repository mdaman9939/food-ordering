import React from "react";
import { AiFillStar } from "react-icons/ai"; // from react-icons

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.brandContainer}>
        <AiFillStar style={{ color: "#f39c12", fontSize: "24px" }} />
        <h2 style={styles.brandName}>Food Brand</h2>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%", // Full width of the screen
    height: "60px",
    backgroundColor: "#fff", // Background color of the navbar
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Light shadow for navbar
    padding: "0", // Remove default padding
    margin: "0", // Remove default margin
    position: "absolute", // Fixed position at the top
    top: "0", // No top gap
    left: "0", // No left gap
    right: "0", // No right gap
    zIndex: 1000, // Ensure navbar stays on top of other content
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // Align to the left to prevent shifting
    gap: "8px",
    padding: "0 15px", // Padding on the sides to create space
    boxSizing: "border-box", // Ensure padding doesn’t overflow
    width: "100%", // Ensure the container spans full width
  },
  brandName: {
    margin: 0,
    fontSize: "20px", // Font size for the brand name
    fontWeight: "bold", // Make the brand name bold
  },
};

export default Navbar;
