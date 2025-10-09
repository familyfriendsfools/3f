import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Required to enable WebSocket connections (Node.js)
neonConfig.webSocketConstructor = ws;

// Only uncomment this if we're deploying to Edge Functions (Cloudflare, Vercel Edge)
// neonConfig.poolQueryViaFetch = true;

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaNeon({ connectionString });

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV === 'development') globalForPrisma.prisma = prisma;

export default prisma;