import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudController } from './solicitud.controller';

describe('Solicitud Controller', () => {
  let controller: SolicitudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudController],
    }).compile();

    controller = module.get<SolicitudController>(SolicitudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
