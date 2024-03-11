/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProtjectDto } from './create-protject.dto';

export class UpdateProtjectDto extends PartialType(CreateProtjectDto) {

    name: string;
    description: string;
    started_at: Date | null;
    cancelled_at: Date | null;
    finished_at: Date | null;
    forecasted_at: Date | null;
}
