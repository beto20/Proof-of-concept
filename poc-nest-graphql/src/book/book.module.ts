import { Module } from '@nestjs/common';
import { BookService } from './service/book.service';
import { AuthorModule } from 'src/author/author.module';
import { BookResolver } from './resolver/book.resolver';
import { BookRepository } from './repository/book.repository';

@Module({
  imports: [AuthorModule, BookRepository],
  providers: [BookService, BookResolver, BookRepository]
})
export class BookModule {}
