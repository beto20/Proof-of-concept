import { BookDto } from "src/book/dto/book.dto";

export interface AuthorDto {
    id: number;
    name: string;
    lastname: string;
    books: BookDto[];
}