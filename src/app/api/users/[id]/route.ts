import { connectDB } from '@/lib/mongoose';
import User from '@/models/user';

export async function GET(_, { params }) {
    await connectDB();
    const user = await User.findById(params.id);
    if (!user) return new Response('Not found', { status: 404 });
    return Response.json(user);
}

export async function PUT(req, { params }) {
    await connectDB();
    const data = await req.json();
    const updated = await User.findByIdAndUpdate(params.id, data, { new: true });
    return Response.json(updated);
}

export async function DELETE(_, { params }) {
    await connectDB();
    await User.findByIdAndDelete(params.id);
    return new Response('Deleted', { status: 204 });
}
