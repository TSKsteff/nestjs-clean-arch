/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { IPojectRepository } from './projects.repository';

@Injectable()
export class FindAllProjectsUseCase{
   
    @Inject('IPojectRepository')
    private readonly projectRepo: IPojectRepository;
    
    execute(){
        return this.projectRepo.FindAll();
    }
}