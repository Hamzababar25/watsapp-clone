import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Contact } from "src/Contact/contact.schema";
import { ConService } from "src/Contact/contact.service";
import { User } from "./user.schema";
import { UserService } from "./user.service";

export class CreateUserDto
{
  
    username: string;


    
    phn_number: number;

   
    Contactid:Contact;

   
    pp:string;

    
    description:string;
}


@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService,
      private readonly conService: ConService) {}

    @Post()
async create(@Body() createuserDto: CreateUserDto) {
   return this.userService.createuser(createuserDto)

}



@Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

@Get('b/:idd')
async findOnee(@Param('idd') id: string) {
  console.log(id)
  const u:any= await this.userService.findOne(id);
  const con=await this.conService.findAll(id)
 if(u)
 {
       return {
        ...u?._doc,con
       }
 }
}

@Get('one/:idd')
async findOneee(@Param('idd') id: string,@Body()bd:any) {
  console.log(id)
  const u:any= await this.userService.findOne(id);
  const con=await this.conService.findOne(bd.id);
 if(u)
 {
       return {
        ...u?._doc,con
       }
 }
}


  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.userService.update({id,...bd});
  }

}
