import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from 'mongoose';
import { Contact, ContactDocument } from "src/Contact/contact.schema";
import { Message, MessageDocument } from "src/Message/message.schema";
import { CreateUserDto } from "./user.controller";
import { User, UserDocument } from "./user.schema";


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Contact.name) private readonly contactModel: Model<ContactDocument>,
   
    @InjectModel(Message.name) private readonly msgModel: Model<MessageDocument>) {}

    async createuser(createuserDto:CreateUserDto): Promise<User> {
        const createduser= await this.userModel.create(createuserDto);
        return createduser;
      }
      async findAll(): Promise<User[]> {
        return this.userModel.find(
          
        ).exec();
      }
      async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id })//.populate('Userid','', this.userModel).populate('Restaurantid','', this.resModel);
      }

      async findOnee({id,Email }:any): Promise<User> {
        return await this.userModel.findOne({$or:[{_id:id},{Email}]}).populate('Contactid','',this.contactModel)
      }
      async delete(id: string) {
        const deletedmember = await this.userModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedmember;
      }
      async update({id,Name,location}) {
        const updatedoc = await this.userModel
          .findByIdAndUpdate(id,{ Name,location })
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }