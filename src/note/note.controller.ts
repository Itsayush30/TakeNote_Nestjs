import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get("/all")
  async getAllNotes(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Post('/new')
  @UseGuards(AuthGuard())
  async createNote(
    @Body()
    note: CreateNoteDto,
    @Req() req,
  ): Promise<Note> {
    console.log('here', req.user.id);
    console.log('here2', note);
    console.log({ ...note, user: req.user.id });
    return this.noteService.create({ ...note, user: req.user.id });
  }

  @Get(':id')
  async getNote(
    @Param('id')
    id: string,
  ): Promise<Note> {
    return this.noteService.findById(id);
  }

  @Put('update/:id')
  async updateNote(
    @Param('id')
    id: string,
    @Body()
    note: UpdateNoteDto,
  ): Promise<Note> {
    return this.noteService.updateById(id, note);
  }

  @Delete('delete/:id')
  async deleteNote(
    @Param('id')
    id: string,
  ): Promise<Note> {
    return this.noteService.deleteById(id);
  }

  @Get('')
  @UseGuards(AuthGuard())
  async getNotesByUser(@Req() req): Promise<Note[]> {
    console.log(req.user.id)
    const userId = req.user.id;
    console.log(userId)
    return this.noteService.findByUserId(userId);
  }

}
