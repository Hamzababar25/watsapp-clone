
import { ContextIdFactory } from '@nestjs/core';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Contact } from 'src/Contact/contact.schema';



export type UserDocument = User & Document;

@Schema()
export class User {

   

    @Prop({unique: true})
    username: string;


    @Prop({unique: true})
    phn_number: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Contact'})
    Contactid:Contact

    @Prop()
    pp:string;

    @Prop()
    description:string;

 

  

}
export const UserSchema = SchemaFactory.createForClass(User);