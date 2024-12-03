import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email:string;
    avatar: string;
    created_at: Date;
    status: EUserStatus;
    role: EUserRole;
    courses: Schema.Types.ObjectId[];

}

const userSchema = new Schema<IUser>({
    clerkId: {
        type: String,
    },
    name: {
        type: String,
    },
    username: {
        type: String,
        unique: true, //email không dược trùng
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    avatar: {
        type: String,
    },
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Course"
        }
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: Object.values(EUserRole),
        default: EUserRole.USER,
    },
    status: {
        type: String,
        enum: Object.values(EUserStatus),
        default: EUserStatus.ACTIVE,
    }
});
const User = models.User || model<IUser>("USER", userSchema);
export default User;