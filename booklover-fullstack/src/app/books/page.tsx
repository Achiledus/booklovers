
import { prisma } from "@/lib/db";
import Link from "next/link";


export default async function BooksPage() {

    const books = await prisma.book.findMany();

    return (
        <main>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link href={`/books/${book.slug}`}> {book.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}