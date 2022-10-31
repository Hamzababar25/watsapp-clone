import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from 'mongoose';
import { Contact, ContactDocument } from "src/Contact/contact.schema";
import { Message, MessageDocument } from "src/Message/message.schema";
import { CreateUserDto } from "src/User/user.controller";
import { User, UserDocument } from "src/User/user.schema";
import { CreateContactDto } from "./contact.controller";


@Injectable()
export class ConService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Contact.name) private readonly contactModel: Model<ContactDocument>,
   
    @InjectModel(Message.name) private readonly msgModel: Model<MessageDocument>) {}

    async createcon(createconDto:CreateContactDto): Promise<Contact> {
        const createdcon= await this.contactModel.create(createconDto);
        return createdcon;
      }
      async findAll(user_id:string): Promise<Contact[]> {
        return this.contactModel.find({user_id:user_id})//.populate(['Contactid']);
      }
      async findOne(id: string): Promise<Contact> {
        return this.contactModel.findOne({ _id: id }).exec();
      }
      async delete(id: string) {
        const deletedmember = await this.contactModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,Name,location}) {
        const updatedoc = await this.contactModel
          .findByIdAndUpdate(id,{ Name,location })
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }