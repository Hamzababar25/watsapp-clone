import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "src/User/user.schema";
import { Contact } from "./contact.schema";
import { ConService } from "./contact.service";

export class CreateContactDto
{
  
    username: string;

   
    
    phone_number: number

    pp:string;

    description:string;
    user_id:User
}


@Controller('Contact')
export class ContactController {
    constructor(private readonly conService: ConService) {}

    @Post()
async create(@Body() createconDto: CreateContactDto) {
   return this.conService.createcon(createconDto)

}
@Get()
  async findAll(user_id): Promise<Contact[]> {
    return this.conService.findAll(user_id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Contact> {
    return this.conService.findOne(id);
  }





  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.conService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.conService.update({id,...bd});
  }

}
