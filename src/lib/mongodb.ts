import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('⚠ Please define the MONGODB_URI environment variable inside .env')
}

// Global cache (for hot reload in dev)
let cached = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    console.log('MONGODB_URI', MONGODB_URI)

    if (cached.conn) return cached.conn

    if (!cached.promise) {
        mongoose.set('strictQuery', false);
        cached.promise = mongoose.connect(MONGODB_URI, {
            serverApi: { version: '1', strict: true, deprecationErrors: true },
        }).catch((err) => {
            console.error('❌ Mongoose connection error:', err);
            throw err;
        });
    }



    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect