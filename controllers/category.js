// const prisma = require("../config/prisma");
const prisma = require("../config/prisma");

const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
exports.showTest = async (req, res) => {
  try {
    const data = await prisma.category.findMany(); // ✅ เรียกผ่าน instance
    res.status(200).json({ data });
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// ไยกนหยดยกดนยก
exports.create = async (req, res) => {
  const { namee } = req.body;

  try {
    const data = await prisma.category.create({
      data: {
        name: namee, // ต้องอยู่ภายใต้ key `data`
      },
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.createImages = async (req, res) => {
  try {
    //code
    // console.log(req.body)
    const result = await cloudinary.uploader.upload(req.body.image, {
      public_id: `Roitai-${Date.now()}`,
      resource_type: "auto",
      folder: "Ecom2024",
    });
    res.send(result);
  } catch (err) {
    //err
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
