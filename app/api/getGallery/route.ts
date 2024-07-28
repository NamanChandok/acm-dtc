import fs from 'fs';
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    interface Gallery {
        name: string,
        date: string,
        images: string[]
    }

    let gallery:Gallery[] = [];
    const dir = fs.readdirSync('public/gallery');
    const folders = dir.filter(folder => folder.split('.').length == 1);
    folders?.map(folder => {
        const files = fs.readdirSync(`public/gallery/${folder}`);
        const images = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'));
        const date = files.filter(file => file.endsWith('.txt'))[0]?.split('.')[0];
        gallery.push({name: folder, date: date, images: images});
    });
    return NextResponse.json(gallery);
}