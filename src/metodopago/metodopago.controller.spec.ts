import { Test, TestingModule } from '@nestjs/testing';
import { MetodopagoController } from './metodopago.controller';

describe('Metodopago Controller', () => {
  let controller: MetodopagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodopagoController],
    }).compile();

    controller = module.get<MetodopagoController>(MetodopagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
