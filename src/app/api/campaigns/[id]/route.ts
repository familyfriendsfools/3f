import connectDB from '@/lib/mongodb';
import Campaign from '@/models/campaign';

export async function GET(_, { params }) {
    await connectDB();
    const campaign = await Campaign.findById(params.id).populate('user_id category_id');
    if (!campaign) return new Response('Not found', { status: 404 });
    return Response.json(campaign);
}

export async function PUT(req, { params }) {
    await connectDB();
    const data = await req.json();
    const updated = await Campaign.findByIdAndUpdate(params.id, data, { new: true });
    return Response.json(updated);
}

export async function DELETE(_, { params }) {
    await connectDB();
    await Campaign.findByIdAndDelete(params.id);
    return new Response('Deleted', { status: 204 });
}
