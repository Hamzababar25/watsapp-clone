// @Injectable()
// export class BookService {
//   constructor(
//     @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
//     @InjectModel(Booking.name) private readonly bookModel: Model<BookingDocument>,
//     @InjectModel(Food.name) private readonly foodModel: Model<FoodDocument>,
//     @InjectModel(Restaurant.name) private readonly resModel: Model<RestaurantDocument>) {}

//     async createbook(createbookDto:CreateBookDto): Promise<Booking> {
//         const createdbook= await this.bookModel.create(createbookDto);
//         return createdbook;
//       }
//       async findAll(user_id:string): Promise<Booking[]> {
//         return this.bookModel.find({Userid:user_id}).populate(['Restaurantid']);
//       }
//       async findOne(id: string): Promise<Booking> {
//         return this.bookModel.findOne({ _id: id }).populate('Userid','', this.userModel).populate('Restaurantid','', this.resModel);
//       }
//       async delete(id: string) {
//         const deletedmember = await this.bookModel
//           .findByIdAndRemove({ _id: id })
//           .exec();
//         return deletedmember;
//       }
//       async update({id,Name,location}) {
//         const updatedoc = await this.bookModel
//           .findByIdAndUpdate(id,{ Name,location })
//           .exec();
//         return await this.findOne(updatedoc._id);
//       }

//   }