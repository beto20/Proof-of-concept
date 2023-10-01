import { Module } from '@nestjs/common';
import { AuthorService } from './service/author.service';
import { AuthorResolver } from './resolver/author.resolver';
import { AuthorRepository } from './repository/author.repository';

@Module({
  imports: [AuthorRepository],
  exports: [AuthorService, AuthorRepository],
  providers: [AuthorResolver, AuthorService, AuthorRepository]
})
export class AuthorModule {}
