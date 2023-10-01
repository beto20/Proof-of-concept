import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from '../input/create-author.input';
import { UpdateAuthorInput } from '../input/update-author.input';
import { randomInt } from 'crypto';
import { AuthorResponse } from '../dto/author.response';
import { AuthorRepository } from '../repository/author.repository';
import { AuthorDto } from '../dto/author.dto';

@Injectable()
export class AuthorService {

  constructor(private readonly authorRepository: AuthorRepository) { }


  async create(createAuthorInput: CreateAuthorInput): Promise<AuthorResponse> {
    const data = await this.authorRepository.dataSource();

    const id = randomInt(1, 10000);

    const dto: AuthorDto = {
      id: id,
      name: createAuthorInput.name,
      lastname: createAuthorInput.lastname,
      books: createAuthorInput.books
    }
    console.log(dto)
    data.push(dto);
    console.log(data)
    return dto
  }

  findAll(): AuthorResponse[] {
    const data = this.authorRepository.dataSource();
    return data.map(author => {
      const a = {
        ...author,
      }
      return a
    })

  }

  async findOne(id: number): Promise<AuthorResponse> {
    const data = this.authorRepository.dataSource();
    const author = data.find(x => x.id === id)

    return author
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }



}