const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI =
  "mongodb+srv://root:root@cluster0.q4ld5sb.mongodb.net/Hackathon?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

const Schema = mongoose.Schema;
const userDataSchema = new Schema({
  name: String,
  email: String,
  number: Number,
  address: String,
  pincode: Number,
  constitution: String,
  date: String,
  panNumber: String,
  nature: String,
  gstin: String,
  sector: String,
  category: String,
  existingLoanType: String,
  existingLoanLimit: Number,
  existingLoanDueDate: String,
  existingLoanBankName: String,
  existingLoanROI: Number,
  loanRequestedType: String,
  loanRequestedAmount: Number,
  loanRequestedPurpose: String,
  collateralOffered: String,
  netSales: Number,
  netProfit: Number,
  netRevenue: Number,
  cibil: Number,
  loanTerm: Number,
  commercialAssets: Number,
  bankAssets: Number,
  luxuryAssets: Number,
});

const UserData = mongoose.model("sme_info", userDataSchema);

app.use(cors());
app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
  try {
    const inputData = req.body;
    const predictionResponse = await axios.post(
      "http://127.0.0.1:5001/predict",
      inputData
    );
    const prediction = predictionResponse.data.prediction;
    res.json({ prediction });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/user", async (req, res) => {
  try {
    const newUser = new UserData({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      address: req.body.address,
      pincode: req.body.pincode,
      constitution: req.body.constitution,
      date: req.body.date,
      panNumber: req.body.panNumber,
      nature: req.body.nature,
      gstin: req.body.gstin,
      sector: req.body.sector,
      category: req.body.category,
      existingLoanType: req.body.existingLoanType,
      existingLoanLimit: req.body.existingLoanLimit,
      existingLoanDueDate: req.body.existingLoanDueDate,
      existingLoanBankName: req.body.existingLoanBankName,
      existingLoanROI: req.body.existingLoanROI,
      loanRequestedType: req.body.loanRequestedType,
      loanRequestedAmount: req.body.loanRequestedAmount,
      loanRequestedPurpose: req.body.loanRequestedPurpose,
      collateralOffered: req.body.collateralOffered,
      netSales: req.body.netSales,
      netProfit: req.body.netProfit,
      netRevenue: req.body.netRevenue,
      cibil: req.body.cibil,
      loanTerm: req.body.loanTerm,
      commercialAssets: req.body.commercialAssets,
      bankAssets: req.body.bankAssets,
      luxuryAssets: req.body.luxuryAssets,
    });

    await newUser.save();

    res.status(201).json({ message: "User data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
