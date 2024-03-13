import { IsNotEmpty, IsString } from "class-validator";
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
    readonly mood: Mood
    readonly specialnote: string;
}