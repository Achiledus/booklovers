import { prisma } from "@/lib/db";
import Link from "next/link";


export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {

    const slug = (await params).slug;


    const book = await prisma.book.findUnique({
        where: {
            slug: slug,
        }
    });

    return (
        <main>
            <h1>{book?.title}</h1>
            <p>{book?.content}</p>
        </main>
    )
}