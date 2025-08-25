"use server"

import { prisma } from "../db";


export async function createBook(formData: FormData) {
    const title = formData.get('title') as string;
    const subtitle = formData.get('subtitle') as string;
    const slug = title.replaceAll("", "-")
    const description = formData.get('description') as string;
    const content = formData.get('content') as string;

    await prisma.book.create({
        data: {
            slug: slug,
            title: title,
            subtitle: subtitle,
            description: description,
            content: content,
            genres: 'romance',
            status: 'published',
        }
    });
}