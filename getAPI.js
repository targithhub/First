const express = require("express");

const app = express();

PORT = 5001;

app.get("/stationaryProducts", (req, res) => {
  const stationaryProducts = [
    {
      name: "Book",
      category: "Fiction",
      price: "Rs 600",
    },
    {
      name: "Note Book",
      category: "Large Size",
      price: "Rs 300",
    },
    {
      name: "Pen",
      category: "Blue",
      price: "Rs 50",
    },
    {
      name: "Pencil",
      category: "Dark",
      price: "Rs 10",
    },
  ];
  return res.json(stationaryProducts);
});

app.listen(PORT, () => {
  console.log("Server has started.");
});
