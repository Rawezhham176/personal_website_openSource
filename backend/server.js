const express = require("express");
const app = express();
const port = 3001;

app.get("/api/contents", (req, res) => {
  const data = [
    { id: 1, text: "only test" },
    { id: 2, text: "only test1" },
  ];

  res.json(data);
});

app.use("/static", express.static("public"));

app.listen(port, () => console.log(`Server started on port ${port}`));
