const mongoose = require("mongoose"),
{ Schema } = mongoose,
subscriberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [10000, "Zip code too short"],
        max: 99999
    },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }]
}, {
    timestamps: true
});


module.exports = mongoose.model("Subscriber", subscriberSchema);
