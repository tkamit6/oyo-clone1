import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true
});

// Define and export the User model
const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
export default UserModel;
