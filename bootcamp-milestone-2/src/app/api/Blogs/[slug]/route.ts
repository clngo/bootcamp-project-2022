import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db"; // Import your database connection function
import blogSchema from "@/database/blogSchema"; // Import your Blog model

type IParam = {
  params: {
    slug: string
  }
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParam, _res: NextResponse) {
  await connectDB() // function from db.ts before
  const { slug } = params // another destructure

   try {
        const blog = await blogSchema.findOne({ slug }).orFail()
        return NextResponse.json(blog)
    } catch (err) {
        return NextResponse.json('Blog not found.', { status: 404 })
    }
}