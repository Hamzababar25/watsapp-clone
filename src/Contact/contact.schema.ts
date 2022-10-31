
import { ContextIdFactory } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/User/user.schema';



export type ContactDocument = Contact & Document;

@Schema()
export class Contact {

   

    @Prop()
    username: string;

    @Prop()
    pp:string;

    @Prop()
    description:string;

    @Prop({unique: true})
    phone_number: number;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
   user_id:User

   
   

  

}
export const ContactSchema = SchemaFactory.createForClass(Contact);