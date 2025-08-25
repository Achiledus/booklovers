

export interface Book {
    id: number;
    title: string;
    subtitle?: string;
    slug: string;
    description?: string;
    content?: string;
    chapters?: Chapter[];
    tags: string[];
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
}

export interface BookMeta {
    pages?: number;
    language?: string;
    isbn13?: string;
    coverUrl?: string;
}