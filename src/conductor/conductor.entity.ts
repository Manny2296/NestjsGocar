import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
@Entity()
export class Conductor {

    @PrimaryGeneratedColumn()
    id_conductor:number;
    @Column()
    nombre:string;
    @Column()
    apellido:string;
    @Column()
    tipo_servicio:string;
    @Column('bigint')
    numero_celular:string;
    @Column()
    correo:string;
    @Column()
    metodo_pago:string;
}
