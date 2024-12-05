import express from "express";
import cors from "cors";

const app = express();

app.use(cors("*"));
app.use(express.json());

//webhook for aries

app.post("/webhook/payment", (req, res) => {
  console.log(req.body);

  res.status(200).json({ msg: "Webhook call successfully", data: req.body });
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server running :)" });
});

app.listen(5000, () => {
  console.log("Server running on port no 5000");
});
