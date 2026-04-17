import { IUser } from "./User";

export interface IMessage {
    id: string;
    sender: IUser;
    messageContent: string;
}