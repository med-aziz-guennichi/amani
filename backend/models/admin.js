const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: [true, "Please Enter Your photo"],
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    nom: {
      type: String,
      required: [true, "Please Enter Your name"],
    },
    prenom: {
      type: String,
      required: [true, "Please Enter Your name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your email"],
    },
    adresse: {
      type: String,
      required: [true, "Please Enter Your adress"],
    },
    cin: {
      type: String,
      required: [true, "Please Enter Your cin"],
    },
    numeroTel: {
      type: Number,
      required: [true, "Please Enter Your numero"],
    },
    dateNaissance: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    motDePasse: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [6, "Password should be greater than 6 characters"],
    },
    matricule: {
      type: String,
      required: [true, "Please Enter Your marticule"],
    },
  },
  {
    timestamps: true,
  }
);

// hashPassword
adminSchema.pre("save", async function (next) {
  if (!this.isModified("motDePasse")) {
    next();
  }
  this.motDePasse = await bcrypt.hash(this.motDePasse, 10);
});

// jwt token
adminSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare Password
adminSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.motDePasse);
};

module.exports = mongoose.model("admin", adminSchema);
