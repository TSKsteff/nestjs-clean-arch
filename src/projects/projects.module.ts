/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { FindAllProjectsUseCase } from './use-cases/find-all-use-case';
import { Project } from './entities/project.entity.js';
import { ProtjectsWithUseCaseController } from './projects-with-use-case.controller';
import { CreateProtjectUseCase } from './use-cases/create-project.use-case';
import { Module } from '@nestjs/common';
import { ProtjectsService } from './projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StartPorjectsUeCase } from './use-cases/start-projects-use-case';
import { ProjectTypoOrmRepository } from './use-cases/projects.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project])],
  controllers: [//ProtjectsController,
      ProtjectsWithUseCaseController],
  providers: [ProtjectsService, CreateProtjectUseCase, FindAllProjectsUseCase, StartPorjectsUeCase, ProjectTypoOrmRepository,
    {
      provide: "IPojectRepository",
      useExisting: ProjectTypoOrmRepository,
    },
],
})
export class ProtjectsModule {}
