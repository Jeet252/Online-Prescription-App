import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg"); // Generate unique filenames
  },
});

const upload = multer({ storage });

const handleMulterError = (req, res, next) => {
  upload.single("profilePhoto")(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(500).send("Multer error");
    }
    next();
  });
};

export { handleMulterError };
