import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookInput } from '../input/book.input';
import { BookEntity } from '../entity/book.entity';
import { BookService } from '../service/book.service';

@Resolver()
export class BookResolver {

    constructor(private readonly bookService: BookService) { }

    @Query((returns) => [BookEntity])
    getBooks() {
        return this.bookService.findAll();
    }

    @Mutation((returns) => BookEntity)
    insertBook(@Args('bookInput') bookInput: BookInput) {
        return this.bookService.insertNewBook(bookInput);
    }

    @Query((returns) => BookEntity)
    getBookById(@Args('id', {type: () => Int}) id: number) {
        return this.bookService.findById(id);
    }

}
