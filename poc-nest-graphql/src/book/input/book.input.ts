import { Field, Float, InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, Max, Min } from "class-validator";

@InputType()
export class BookInput {

    @Field({nullable: true})
    id: number; 

    @Field()
    @IsNotEmpty()
    title: string;
    
    @Field({ nullable: true })
    description: string;

    @Field((type) => Float)
    @IsNotEmpty()
    @Min(1)
    @Max(100)
    price: number;

    @IsInt()
    @Field()
    authorId: number;

}