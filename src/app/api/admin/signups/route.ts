import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const signups = await prisma.emailSignup.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ signups });
  } catch (error) {
    console.error('Error fetching signups:', error);
    return NextResponse.json(
      { error: 'Failed to fetch signups' },
      { status: 500 }
    );
  }
}

