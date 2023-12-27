import { NextResponse } from "next/server"
import { connectDb } from "@/db"
import User from '@/models/user-model'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const POST = async (request) => {
    connectDb();
    // console.log("db connected")
    const data = await request.json()
    const { name, email, password } = data;

    if (!name || !email || !password) {
        return NextResponse.json({ msg: "All Fields are required" }, { status: 400 })
    }
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
        return NextResponse.json({ msg: 'User already exists' }, { status: 400 })
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
        name: name,
        email: email,
        password: hashedPassword
    })
    const result = await newUser.save()
    const token = jwt.sign({ token: result._id }, 'Code_Token', { expiresIn: '1d' })
    return NextResponse.json({ msg: "Registred successfully", token }, { status: 201 })
} 