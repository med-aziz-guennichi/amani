const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const commercialSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: [true, "Please Enter Your photo"],
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
    nb_leads_affectees: {
      type: String,
      required: [true, "Please Enter Your nb_leads_affectees"],
    },
  },
  {
    timestamps: true,
  }
);

// hashPassword
commercialSchema.pre("save", async function (next) {
  if (!this.isModified("motDePasse")) {
    next();
  }
  this.motDePasse = await bcrypt.hash(this.motDePasse, 10);
});

// jwt token
commercialSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare Password
commercialSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.motDePasse);
};

module.exports = mongoose.model("commercial", commercialSchema);
