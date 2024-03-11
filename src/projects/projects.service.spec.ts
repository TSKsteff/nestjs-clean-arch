/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProtjectsService } from './projects.service';

describe('ProtjectsService', () => {
  let service: ProtjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProtjectsService],
    }).compile();

    service = module.get<ProtjectsService>(ProtjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
