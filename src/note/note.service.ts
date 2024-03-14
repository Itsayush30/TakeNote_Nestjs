import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Note } from './schemas/note.schema';
import { User } from '../auth/schemas/user.schema';

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
 
    async create(note: Note,user:User): Promise<Note>{
        const res = await this.noteModel.create(note)
        return res

    }

    async findById(id: string): Promise<Note> {

        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Please enter correct id.');
          }
      

        const book = await this.noteModel.findById(id);
    
        if (!book) {
          throw new NotFoundException('Book not found.');
        }
    
        return book;
      }
    
      async updateById(id: string, book: Note): Promise<Note> {
        return await this.noteModel.findByIdAndUpdate(id, book, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string): Promise<Note> {
        return await this.noteModel.findByIdAndDelete(id);
      }

}
