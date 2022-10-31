import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactController } from './Contact/contact.controller';
import { Contact, ContactSchema } from './Contact/contact.schema';
import { ConService } from './Contact/contact.service';
import { Message, MessageSchema } from './Message/message.schema';
import { UserController } from './User/user.controller';
import { User, UserSchema } from './User/user.schema';
import { UserService } from './User/user.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/Watsapp'),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{ name: Contact.name, schema: ContactSchema },{ name: Message.name, schema: MessageSchema }])],
  controllers: [AppController,UserController,ContactController],
  providers: [AppService,UserService,ConService],
})
export class AppModule {}
