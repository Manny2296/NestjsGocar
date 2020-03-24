import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { ClienteModule } from './cliente/cliente.module';
import { SolicitudController } from './solicitud/solicitud.controller';
import { SolicitudService } from './solicitud/solicitud.service';
import { SolicitudModule } from './solicitud/solicitud.module';
import { MetodopagoController } from './metodopago/metodopago.controller';
import { MetodopagoService } from './metodopago/metodopago.service';
import { MetodopagoModule } from './metodopago/metodopago.module';
import { ConductorController } from './conductor/conductor.controller';
import { ConductorService } from './conductor/conductor.service';
import { ConductorModule } from './conductor/conductor.module';

@Module({
  imports: [ClienteModule, SolicitudModule, MetodopagoModule, ConductorModule],
  controllers: [AppController, ClienteController, SolicitudController, MetodopagoController, ConductorController],
  providers: [AppService, ClienteService, SolicitudService, MetodopagoService, ConductorService],
})
export class AppModule {}
