import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  async getAllNotes(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Post('new')
  @UseGuards(AuthGuard())
  async createNote(
    @Body()
    note:CreateNoteDto,
    @Req() req
  ): Promise<Note> {
    return this.noteService.create(note, req.user);
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
