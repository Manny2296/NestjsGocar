
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
@Entity()
export class Solicitud {
    @PrimaryGeneratedColumn()
    id_solicitud:number;
    @Column()
    id_cliente:number;
    @Column()
    partida:string;
    @Column()
    destino:string;
    @Column()
    valor:number;
    @Column()
    metodo_pago:string;
    @Column()
    tipo_servicio:string;
    @Column()
    id_conductor:number;
}
