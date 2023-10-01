import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BookEntity } from 'src/book/entity/book.entity';

@ObjectType()
export class AuthorEntity {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  lastname: string;
  @Field(() => [BookEntity], { nullable: true })
  books: BookEntity[];
  
}