import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { AuthorInput } from './author.input';

@InputType()
export class CreateAuthorInput extends PartialType(AuthorInput) {

}
