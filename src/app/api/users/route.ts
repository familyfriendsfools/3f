import connectDB from '@/lib/mongodb';
import User from '@/models/user';

export async function GET() {
    await connectDB();
    const users = await User.find();
    return Response.json(users);
}

export async function POST(req) {
    await connectDB();
    const body = await req.json();
    const created = await User.create(body);
    return Response.json(created, { status: 201 });
}
