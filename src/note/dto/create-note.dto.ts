import { IsEmpty, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Mood } from "../schemas/note.schema";
import { User } from "../../auth/schemas/user.schema";


export class CreateNoteDto{

    @IsNotEmpty()
    @IsString()
    readonly title:string;


    @IsNotEmpty()
    @IsString()
    readonly author: string;


    @IsNotEmpty()
    @IsString()
    readonly note: string;

    @IsNotEmpty()
    //@IsEnum(Mood, {message: 'Please choose correct Mood'})
    readonly mood: Mood
    readonly specialnote: string;

    
   
    readonly user: User;
}