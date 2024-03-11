/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { StartPorjectsDTO } from './../dto/start-protject.dto copy';
import { IPojectRepository } from './projects.repository';


export class StartPorjectsUeCase{

    @Inject('IPojectRepository') 
    private readonly projectRepo: IPojectRepository;

    async execute(id: string, input: StartPorjectsDTO){
        const project = await this.projectRepo.findById(id);
        project.start(input.started_at);
        await this.projectRepo.Update(project);
        return project;
    }
}