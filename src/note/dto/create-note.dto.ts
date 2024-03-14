import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Mood } from "../schemas/note.schema";


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
}