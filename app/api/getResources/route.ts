import fs from 'fs';
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {

    const dir = fs.readdirSync('public/resources');
    const resources = dir.filter(folder => folder.toLowerCase().endsWith('pdf'));

    return NextResponse.json(resources);
}