import { connectDB } from '@/lib/mongoose';
import Category from '@/models/category';

export async function GET(_, { params }) {
    await connectDB();
    const category = await Category.findById(params.id);
    if (!category) return new Response('Not found', { status: 404 });
    return Response.json(category);
}

export async function PUT(req, { params }) {
    await connectDB();
    const data = await req.json();
    const updated = await Category.findByIdAndUpdate(params.id, data, { new: true });
    return Response.json(updated);
}

export async function DELETE(_, { params }) {
    await connectDB();
    await Category.findByIdAndDelete(params.id);
    return new Response('Deleted', { status: 204 });
}
