import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Property {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    address: string;

    @Column()
    locality: string;

    @Column()
    price: number;

    @Column()
    carpet_area: number;

    //@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    //createDateTime: Date;

    //@UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    //lastChangedDateTime: Date;

}