/* eslint-disable prettier/prettier */
import { StartPorjectsUeCase } from './use-cases/start-projects-use-case';
import { FindAllProjectsUseCase } from './use-cases/find-all-use-case';
import { CreateProtjectUseCase } from './use-cases/create-project.use-case';
import { Controller, Post, Body, Get, Param, Inject} from '@nestjs/common';
import { CreateProtjectDto } from './dto/create-protject.dto';
import { StartPorjectsDTO } from './dto/start-protject.dto copy';

@Controller('projects')
export class ProtjectsWithUseCaseController {
  
  @Inject(CreateProtjectUseCase)
  private readonly createProtjectUseCase: CreateProtjectUseCase;
  @Inject(FindAllProjectsUseCase)
  private readonly findAllProjectsUseCase: FindAllProjectsUseCase;
  @Inject(StartPorjectsUeCase)
  private readonly startPorjectsUeCase: StartPorjectsUeCase;


@Post()
  create(@Body() createProtjectDto: CreateProtjectDto) {
    return this.createProtjectUseCase.execute(createProtjectDto);
  }
@Get()
  findAll() {
    return this.findAllProjectsUseCase.execute();
  }

@Post(':id/start')
  start(@Param('id') id: string, @Body() startPorjectsDTO: StartPorjectsDTO) {
    return this.startPorjectsUeCase.execute(id, startPorjectsDTO);
  }

  // /Patch /projects/:id



  /**
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
  }*/
}
