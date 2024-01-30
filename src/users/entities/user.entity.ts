import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { })
  id: number;

  @Field(() => Int, { description: 'gakusekibanngou' })
  studentNumber: number;
}
