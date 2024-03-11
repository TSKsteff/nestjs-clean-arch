/* eslint-disable prettier/prettier */
import { Project } from '../entities/project.entity';
import { CreateProtjectDto } from './../dto/create-protject.dto';
import { Inject, Injectable } from '@nestjs/common';
import { IPojectRepository } from './projects.repository';

@Injectable()
export class CreateProtjectUseCase{
    @Inject('IPojectRepository')
    private readonly projectRepo: IPojectRepository;
    
    async execute(input: CreateProtjectDto){
        const project = new Project(input);
        await this.projectRepo.create(project);
        return project;
    }
}