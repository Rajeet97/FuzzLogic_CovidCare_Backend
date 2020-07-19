const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.district = require("./district.model");
db.hospital = require("./hospital.model");
db.faq = require("./faq.model");
db.helpline = require("./helpline.model");
db.suspect = require("./suspect.model");
db.donation = require("./donation.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;