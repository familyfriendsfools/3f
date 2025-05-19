import { connectDB } from '@/lib/mongoose';
import Campaign from '@/models/campaign';

export async function GET() {
    await connectDB();
    const campaigns = await Campaign.find().populate('user_id category_id');
    return Response.json(campaigns);
}

export async function POST(req) {
    await connectDB();
    const body = await req.json();
    const created = await Campaign.create(body);
    return Response.json(created, { status: 201 });
}
