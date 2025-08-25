

export interface Book {
    id: number;
    title: string;
    subtitle?: string;
    slug: string;
    description?: string;
    content?: string;
    chapters?: Chapter[];
    tags: BookTag[];
    genres: "fiction" | "non-fiction" | "fantasy" | "sci-fi" | "mystery" | "romance" | "history" | "biography";
    authorId: number;
    status: "draft" | "published" | "archived";
    meta?: BookMeta;
    createdAt: string;
    updatedAt: string;
}

export interface Chapter {
    id: number;
    title: string;
    order: number;
    content: string;
    wordCount: number;
    bookId: number;
    book?: Book;
}

export interface BookMeta {
    id: number;
    pages?: number;
    language?: string;
    isbn13?: string;
    coverUrl?: string;
    bookId: number;
    book?: Book;
}

export interface BookTag {
    id: number;
    name: string
    bookId: number;
    book?: Book;
}