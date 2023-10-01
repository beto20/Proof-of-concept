import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorService } from '../service/author.service';
import { AuthorEntity } from '../entity/author.entity';
import { CreateAuthorInput } from '../input/create-author.input';
import { UpdateAuthorInput } from '../input/update-author.input';
import { AuthorResponse } from '../dto/author.response';

@Resolver(() => AuthorEntity)
export class AuthorResolver {

  constructor(private readonly authorService: AuthorService) { }

  @Mutation(() => AuthorEntity)
  async createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput): Promise<AuthorResponse> {
    return await this.authorService.create(createAuthorInput)
    .then((response) => {

      const res: AuthorResponse = {
        id: response.id,
        name: response.name,
        lastname: response.lastname,
      }

      // return Promise.resolve<AuthorResponse>(mock);
      return res;
    })
    .catch((err) => {
      const errResponse: AuthorResponse = {
        id: 0,
        name: "",
        lastname: "",
      }

      // return Promise.reject(errResponse);
      console.log(err)
      return errResponse;
    })
  }

  @Query((returns) => [AuthorEntity])
  findAll(): AuthorResponse[] {
    return this.authorService.findAll();
  }

  @Query(() => AuthorEntity, { name: 'author' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOne(id);
  }

  @Mutation(() => AuthorEntity)
  updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput,
    @Args('id') id: number
  ) {
    return this.authorService.update(id, updateAuthorInput);
  }

  @Mutation(() => AuthorEntity)
  removeAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.remove(id);
  }
}
