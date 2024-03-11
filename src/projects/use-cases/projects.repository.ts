/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';


export interface IPojectRepository{
    create(project: Project): Promise<void>;
    Update(project: Project): Promise<void>
    FindAll(): Promise<Project[]>;
    findById(id: string): Promise<Project>;
}

export class ProjectTypoOrmRepository implements IPojectRepository{

    constructor(
        @InjectRepository(Project)
        private typeOrmRepo: Repository<Project>){}

    async create(project: Project): Promise<void> {
        await this.typeOrmRepo.save(project);
    }
    async Update(project: Project): Promise<void> {
        this.typeOrmRepo.update(project.id, project);
    }
    FindAll(): Promise<Project[]> {
        return this.typeOrmRepo.find();    
    }
    findById(id: string): Promise<Project> {
        return this.typeOrmRepo.findOneOrFail({where:{id}});;
    }

}