import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  async getAllNotes(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Post('new')
  async createNote(
    @Body()
    note:CreateNoteDto,
  ): Promise<Note> {
    return this.noteService.create(note);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Note> {
    return this.noteService.findById(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateNoteDto,
  ): Promise<Note> {
    return this.noteService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Note> {
    return this.noteService.deleteById(id);
  }

}
