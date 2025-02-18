import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>
        © 2023 Food Ordering App. All rights reserved.
      </p>
    </footer>
  );
};

// Inline CSS styles for Footer
const styles = {
  footer: {
    backgroundColor: "#003366", // Navy Blue
    padding: "20px",
    color: "#fff", // White text
    textAlign: "center",
    marginTop: "auto", // Push footer to the bottom
  },
  footerText: {
    fontSize: "16px",
    margin: "0",
  },
};

export default Footer;
