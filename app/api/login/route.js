import { connectDb } from '@/db';
import User from '@/models/user-model';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    try {
        connectDb(); // Assuming this is a function that connects to the database

        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ msg: "Email and password are required!" }, { status: 400 });
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return NextResponse.json({ msg: "Please Register!" }, { status: 400 });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return NextResponse.json({ msg: "Invalid Password" }, { status: 400 });
        }

        const token = jwt.sign({ userId: user._id }, 'Code_Token', { expiresIn: '1d' });
        return NextResponse.json({ msg: "Logged In Successfully", token: token }, { status: 200 });
        
    } catch (error) {
        console.error("Error logging in:", error);
        return NextResponse.json({ msg: "Failed to process the request" }, { status: 500 });
    }
};
