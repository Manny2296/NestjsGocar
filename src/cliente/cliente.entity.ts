import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id_cliente:number;
    @Column()
    nombre:string;
    @Column()
    apellido:string;
    @Column('bigint')
    numero_celular:number;
    @Column()
    correo:string;
    @Column()
    metodo_pago:string;
}
