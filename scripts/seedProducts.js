require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not defined. Check your .env.local file.");
  process.exit(1);
}

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String, default: "" },
    category: { type: String, required: true },
    description: { type: String, default: "" },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

const sampleProducts = [
  {
    name: "ESP32 Dev Board",
    slug: "esp32-dev-board",
    price: 499,
    category: "Microcontrollers",
    description:
      "Dual-core Wi-Fi & Bluetooth microcontroller, perfect for IoT projects.",
    stock: 25,
  },
  {
    name: "Sensor Starter Pack",
    slug: "sensor-starter-pack",
    price: 799,
    category: "Sensors",
    description:
      "A 10-in-1 sensor kit including temperature, IR, ultrasonic, and more.",
    stock: 15,
  },
  {
    name: "Arduino Uno R3",
    slug: "arduino-uno-r3",
    price: 650,
    category: "Microcontrollers",
    description: "The classic beginner-friendly microcontroller board.",
    stock: 30,
  },
  {
    name: "Breadboard & Jumper Wires Kit",
    slug: "breadboard-jumper-kit",
    price: 249,
    category: "Accessories",
    description:
      "830-point breadboard with 65 jumper wires, essential for prototyping.",
    stock: 40,
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);

    console.log(`Seeded ${sampleProducts.length} products.`);
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seed();