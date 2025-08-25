//https://nextjs.org/docs/app/api-reference/file-conventions/route#request-body

import { prisma } from "@/lib/db";


export async function POST(request: Request) {
    try {
        const res = await request.json()
        const title = res.title as string;
        const subtitle = res.subtitle as string;
        const slug = title.replaceAll("", "-")
        const description = res.description as string;
        const content = res.content as string;

        const response = await prisma.book.create({
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

        return Response.json(response);
    } catch (error) {
        console.log(error);
        return Response.json({ "msg": "internal server error" }, {
            status: 500,
        })
    }
}

export async function GET(request: Request) {
    const books = await prisma.book.findMany();
    return Response.json(books);
}
