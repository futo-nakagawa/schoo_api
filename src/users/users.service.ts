import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  create(createUserInput: CreateUserInput): Promise<User> {
    return this.userRepository.save(createUserInput);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserInput: UpdateUserInput){
    return this.userRepository.update(id, {studentNumber: updateUserInput.studentNumber});
  }

  remove(id: number){
    return this.userRepository.delete({id});
  }
}
