import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { SchemaTypes } from 'mongoose';


export enum Mood {
  HAPPY = 'Happy',
  SAD = 'Sad',
  LONE = 'Lone',
  Angry = 'Angry',
}

@Schema({
  timestamps: true,
})
export class Note {
  @Prop()
  title: string;

  @Prop()
  note: string;

  @Prop()
  author: string;


  @Prop()
  specialnote: string;

  //@Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  //userId: string; // Assuming userId is of type string

  @Prop()
  mood: Mood;
}

export const NoteSchema = SchemaFactory.createForClass(Note);