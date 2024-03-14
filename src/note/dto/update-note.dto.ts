import { IsEnum, IsOptional, IsString } from "class-validator";
import { Mood } from "../schemas/note.schema";


export class UpdateNoteDto{

    @IsOptional()
    @IsString()
    readonly title:string;

    @IsOptional()
    @IsString()
    readonly author: string;

    @IsOptional()
    @IsString()
    readonly note: string;

    @IsOptional()
    //@IsEnum(Mood, {message: 'Please choose correct Mood'})
    readonly mood: Mood
    readonly specialnote: string;
}