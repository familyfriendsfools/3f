import { connectDB } from '@/lib/mongoose';
import Category from '@/models/category';

export async function GET() {
    await connectDB();
    const categories = await Category.find();
    return Response.json(categories);
}

export async function POST(req) {
    await connectDB();
    const body = await req.json();
    const created = await Category.create(body);
    return Response.json(created, { status: 201 });
}
