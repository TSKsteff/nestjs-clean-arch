/* eslint-disable prettier/prettier */
import { ProjectStatus } from "../entities/project.entity";

export class CreateProtjectDto {
    
    name: string; 
    started_at: Date; 
    cancelled_at: Date;
    description: string; 
    forecasted_at: Date; 
    status: ProjectStatus;

}
