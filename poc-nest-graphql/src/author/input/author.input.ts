import { Field, InputType } from '@nestjs/graphql';
import { BookInput } from 'src/book/input/book.input';

@InputType()
export class AuthorInput {

  @Field({nullable: true})
  id: number;  
  @Field()
  name: string;  
  @Field()
  lastname: string;
  @Field(() => [BookInput], { nullable: true })
  books: BookInput[];

}
