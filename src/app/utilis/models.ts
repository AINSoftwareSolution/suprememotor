import mongoose, { Document, Model } from 'mongoose';

interface UserAttrs {
    name: string;
    email: string;
    phone: string
}

interface UserDoc extends Document {
    name: string;
    email: string;
    phone: string
}

interface UserModel extends Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }

});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.models.User || mongoose.model<UserDoc, UserModel>('User', userSchema);

export default User;
