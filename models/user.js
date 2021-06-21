const randToken = require("rand-token");
const mongoose = require("mongoose"),
    { Schema } = mongoose,
    userSchema = new Schema({
        name: {
            first: {
                type: String,
                trim: true
            },
            last: {
                type: String,
                trim: true
            }
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        zipCode: {
            type: Number,
            min: [1000, "Zip code too short"],
            max: 99999
        },
        password: {
            type: String,
            required: true
        },
        courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
        subscribedAccount: { type: Schema.Types.ObjectId, ref: "Subscriber" }
    }, {
        timestamps: true
    });
userSchema.virtual("fullName")
    .get(function () {
        return `${this.name.first} ${this.name.last}`;
    }),

    userSchema.pre("save", function (next) {
        let user = this;
        if (user.subscribedAccount === undefined) {
            Subscriber.findOne({
                email: user.email
            })
                .then(subscriber => {
                    user.subscribedAccount = subscriber;
                    next();
                })
                .catch(error => {
                    console.log(`Error in connecting subscriber: ${error.message}`);
                    next(error);
                });
        } else {
            next();
        }
    }),
    userSchema.pre("save", function (next) {
        let user = this;
        if (!user.apiToken) user.apiToken =
            randToken.generate(16);
        next();
    });
    verifyToken: (req, res, next) => {
        let token = req.query.apiToken;
        if (token) {
            User.findOne({ apiToken: token })
                .then(user => {
                    if (user) next();
                    else next(new Error("Invalid API token."));
                })
                .catch(error => {
                    next(new Error(error.message));
                });
        } else {
            next(new Error("Invalid API token."));
        }
    }
module.exports = mongoose.model("User", userSchema);
const Subscriber = require("./subscriber");


