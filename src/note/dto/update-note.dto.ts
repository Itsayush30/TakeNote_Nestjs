import { Mood } from "../schemas/note.schema";


export class UpdateNoteDto{
    readonly title:string;
    readonly author: string;
    readonly note: string;
    readonly mood: Mood
    readonly specialnote: string;
}