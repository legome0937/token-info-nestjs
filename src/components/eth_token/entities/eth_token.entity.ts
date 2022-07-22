import { Column, Entity,ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EthToken {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    address: string;

    @Column({length: 50})
    name: string;

    @Column({length: 10})
    symbol: string;

    @Column({length: 100})
    logo: string;

    @Column({length: 100})
    logo_hash: string;

    @Column({length: 100})
    thumbnail: string;

    @Column({length: 20})
    block_number: string;

    @Column({length: 5})
    validated: string;

}
