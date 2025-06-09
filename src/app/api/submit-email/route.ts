import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '../../../lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Insert email into database using Prisma
    const emailSignup = await prisma.emailSignup.create({
      data: {
        email: email.toLowerCase().trim(),
        source: 'alphafc_landing',
      },
    });

    return NextResponse.json(
      { success: true, message: 'Email saved successfully', data: emailSignup },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Handle unique constraint violation (duplicate email)
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      error.code === 'P2002'
    ) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
