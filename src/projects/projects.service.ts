/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateProtjectDto } from './dto/create-protject.dto';
import { UpdateProtjectDto } from './dto/update-protject.dto';
import { Repository } from 'typeorm';
import { Project, ProjectStatus }  from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProtjectsService {

  constructor(
    @InjectRepository(Project) 
    private projectRepo: Repository<Project>
    ){}

  create(createProtjectDto: CreateProtjectDto) {
    const project = new Project(createProtjectDto);
    if (createProtjectDto.started_at){
      project.status = ProjectStatus.Active;
    }
    return this.projectRepo.save(project);
  }

  findAll() {
    return `This action returns all protjects`;
  }

  findOne(id: string) {
    return this.projectRepo.findOneOrFail({where: {id}});
  }

  async update(id: string, updateProtjectDto: UpdateProtjectDto) {
    const project = await this.projectRepo.findOneOrFail({where: {id}});

    updateProtjectDto.name && (project.name = updateProtjectDto.name);
    updateProtjectDto.description &&
      (project.description = updateProtjectDto.description);

      if(updateProtjectDto.started_at){
        if(project.status === ProjectStatus.Active){
          throw new Error('Cannot start active Project');
        }

        if(project.status === ProjectStatus.Completed){
          throw new Error('Cannot Start completed project');
        }

        if(project.status === ProjectStatus.Cancelled){
          throw new Error('Cannot Start cancelled  project');
        } 
        project.started_at = updateProtjectDto.started_at;
        project.status = ProjectStatus.Active; 
      }

      if(updateProtjectDto.cancelled_at){
        if(project.status === ProjectStatus.Completed){
          throw new Error('Cannot start completed Project');
        }

        if(project.status === ProjectStatus.Cancelled){
          throw new Error('Cannot Start cancelled project');
        }

        if(updateProtjectDto.cancelled_at < project.started_at){
          throw new Error('Cannot cancel project before it started');
        }
        project.cancelled_at = updateProtjectDto.cancelled_at;
        project.status = ProjectStatus.Cancelled; 
      }
      
      if(updateProtjectDto.finished_at){
        if(project.status === ProjectStatus.Completed){
          throw new Error('Cannot finish completed Project');
        }

        if(project.status === ProjectStatus.Cancelled){
          throw new Error('Cannot finish completed Project');
        }

        if(updateProtjectDto.finished_at < project.started_at){
          throw new Error('Cannot finish project before it started');
        }
        project.finished_at = updateProtjectDto.finished_at;
        project.status = ProjectStatus.Completed; 
      }
      return this.projectRepo.save(project);
  }

  remove(id: string) {
    return `This action removes a #${id} protject`;
  }
}
