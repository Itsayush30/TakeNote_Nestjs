import { Mood } from "../schemas/note.schema";


export class CreateNoteDto{
    readonly title:string;
    readonly author: string;
    readonly note: string;
    readonly mood: Mood
    readonly specialnote: string;
}