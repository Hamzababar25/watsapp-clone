
import { ContextIdFactory } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Contact } from 'src/Contact/contact.schema';
import { User } from 'src/User/user.schema';



export type MessageDocument = Message & Document;

@Schema()
export class Message {

   

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    userId:User


    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Group'})
    groupId: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Contact'})
    Contactid:Contact

    @Prop()
    Deliveredat:string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
   seenby:{
      userId:User
      seenat:string

   };

 

  

}
export const MessageSchema = SchemaFactory.createForClass(Message);