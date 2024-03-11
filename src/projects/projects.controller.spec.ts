/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProtjectsController } from './projects.controller';
import { ProtjectsService } from './projects.service';

describe('ProtjectsController', () => {
  let controller: ProtjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtjectsController],
      providers: [ProtjectsService],
    }).compile();

    controller = module.get<ProtjectsController>(ProtjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
