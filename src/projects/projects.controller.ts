/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProtjectsService } from './projects.service';
import { CreateProtjectDto } from './dto/create-protject.dto';
import { UpdateProtjectDto } from './dto/update-protject.dto';

@Controller('projects')
export class ProtjectsController {
  constructor(private readonly protjectsService: ProtjectsService) {}

  @Post()
  create(@Body() createProtjectDto: CreateProtjectDto) {
    return this.protjectsService.create(createProtjectDto);
  }

  @Get()
  findAll() {
    return this.protjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.protjectsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProtjectDto: UpdateProtjectDto) {
    return this.protjectsService.update(id, updateProtjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.protjectsService.remove(id);
  }
}
