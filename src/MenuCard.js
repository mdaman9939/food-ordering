import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig"; // Ensure correct import

function MenuCard() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "", imageUrl: "" });

  // Fetch Menu Items
  const fetchMenuItems = async () => {
    const querySnapshot = await getDocs(collection(db, "menu"));
    setMenuItems(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // Add New Item
  const addMenuItem = async () => {
    if (newItem.name && newItem.price && newItem.imageUrl) {
      await addDoc(collection(db, "menu"), newItem);
      setNewItem({ name: "", price: "", imageUrl: "" });
      fetchMenuItems();
    }
  };

  // Delete Item
  const deleteMenuItem = async (id) => {
    await deleteDoc(doc(db, "menu", id));
    fetchMenuItems();
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#2D3748",
        }}
      >
        📜 E-Card Menu
      </h2>

      {/* Add New Item Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.imageUrl}
          onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addMenuItem}
          style={{
            backgroundColor: "#38a169",
            color: "#fff",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2F855A")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#38a169")}
        >
          ➕ Add Item
        </button>
      </div>

      {/* Display Menu Items */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: "#f7fafc",
              borderRadius: "12px",
              padding: "12px",
              textAlign: "center",
              boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.3s",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "10px",
                color: "#2D3748",
              }}
            >
              {item.name}
            </h3>
            <p
              style={{ color: "#38a169", fontSize: "16px", fontWeight: "bold" }}
            >
              ${item.price}
            </p>
            <button
              onClick={() => deleteMenuItem(item.id)}
              style={{
                backgroundColor: "#e53e3e",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#C53030")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#e53e3e")}
            >
              ❌ Remove
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
