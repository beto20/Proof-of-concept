import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BookEntity {
    @Field((type) => Int)
    id: number;
    @Field()
    title: string;
    @Field({ nullable: true })
    description: string;
    @Field((type) => Float)
    price: number;

    @Field((Type) => Int)
    authorId: number;
}