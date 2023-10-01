import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { BookResponse } from '../dto/book.response';
import { BookDto } from '../dto/book.dto';
import { BookRepository } from '../repository/book.repository';
import { CreateBookInput } from '../entity/create-book.input';

@Injectable()
export class BookService {

    constructor(private readonly bookRepository: BookRepository) { }

    async findAll(): Promise<BookResponse[]> {
        const booksSource = await this.bookRepository.dataSource();

        return booksSource.map(book => {
            const bookResponse: BookResponse = {
                // id: book.id,
                // title: book.title,
                // description: book.description,
                // price: book.price
                ...book
            }

            return bookResponse;
        });
    }


    async findById(id: number): Promise<BookResponse> {
        const booksSource = await this.bookRepository.dataSource();

        const b = booksSource.filter(books => books.id === id)
        .map(book => {
            const bookResponse: BookResponse = {
                id: book.id,
                title: book.title,
                description: book.description,
                price: book.price,
                authorId: book.authorId
            }
            console.log(bookResponse)
            return bookResponse;
        })[0];

        console.log(b)
        return booksSource.find(books => books.id === id)
    }

    async insertNewBook(createBookInput: CreateBookInput): Promise<BookResponse> {
        const booksSource = await this.bookRepository.dataSource();

        const id = randomInt(10, 10000);

        const bookDto: BookDto = {
            id: id,
            title: createBookInput.title,
            description: createBookInput.description,
            price: createBookInput.price,
            authorId: createBookInput.authorId
        }

        booksSource.push(bookDto);
        console.log(bookDto)
        console.log(booksSource)
        const bookResponse: BookResponse = {
            ...bookDto
        }

        return bookResponse;
    }

}
