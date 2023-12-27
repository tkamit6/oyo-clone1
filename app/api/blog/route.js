import { NextResponse } from "next/server";
import contactDb from '@/app/blogData/api.json';
import { writeFile } from 'fs/promises';  // Corrected import

export const POST = async (request) => {
  try {
    const data = await request.json();

    // Adding data with a new ID based on the length of the contactDb array
    const newDataWithId = { ...data, id: contactDb.length + 1 };

    // Updating the contactDb array with the new data
    const updatedData = [...contactDb, newDataWithId];

    // Writing the updated data back to the api.json file
    await writeFile('app/blogData/api.json', JSON.stringify(updatedData, null, 2));  // null, 2 for pretty printing

    return NextResponse.json({ data: updatedData }, { status: 200 });
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json({ error: "Failed to process the request" }, { status: 500 });
  }
};




export const GET = async () => {
  const allBlog = contactDb.map((c) => (
    { title: c.title, slug: c.slug }
  ))
  return NextResponse.json({ blog: contactDb }, { status: 201 })
}