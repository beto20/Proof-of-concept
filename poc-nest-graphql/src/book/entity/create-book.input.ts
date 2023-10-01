import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { BookInput } from '../input/book.input';

@InputType()
export class CreateBookInput extends PartialType(BookInput) {

}
