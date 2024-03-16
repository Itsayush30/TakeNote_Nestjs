import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Note } from './schemas/note.schema';

@Injectable()
export class NoteService {
    constructor(
        @InjectModel(Note.name)
        private noteModel: mongoose.Model<Note>
    ) {}

    async findAll(): Promise<Note[]>{
        const notes = await this.noteModel.find();
        return notes;
    }
 
    async create(note: Note): Promise<Note>{
        const res = await this.noteModel.create(note)
        return res

    }

    async findById(id: string): Promise<Note> {

        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Please enter correct id.');
          }
      

        const note = await this.noteModel.findById(id);
    
        if (!note) {
          throw new NotFoundException('Note not found.');
        }
    
        return note;
      }
    
      async updateById(id: string, note: Note): Promise<Note> {
        return await this.noteModel.findByIdAndUpdate(id, note, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string): Promise<Note> {
        return await this.noteModel.findByIdAndDelete(id);
      }

      async  findByUserId(userId: string): Promise<Note[]> {
        return await this.noteModel.find({ user: userId }).exec();
    }


}
