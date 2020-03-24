import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
@Entity()
export class Metodopago {
    @PrimaryGeneratedColumn()
    id_metodo:number;
    @Column()
    id_cliente:number;
    @Column()
    tipo:string;
    
    @Column('bigint')
    ntarjeta:number;

    @Column()
    fecha_caducidad:string;
    @Column()
    codigo_seguridad:number;
    
}
