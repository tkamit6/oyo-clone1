import { NextResponse } from "next/server"
import Blog from '@/app/blogData/api.json'

export const GET = async (request, { params }) => {
    const blog = await Blog.find((c) => (
        c.slug === params.slug
    ))
    if (!blog) {
        return NextResponse.json({ blog: "Not found", params }, { status: 400 })
    }
    return NextResponse.json({ blog: blog }, { status: 201 })
}

