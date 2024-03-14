import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './schemas/note.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
