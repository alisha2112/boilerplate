import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Hotel } from '../hotels/Hotel';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  service_id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  service_name: string;

  @Column({
    type: 'money',
    nullable: false,
  })
  service_price: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  service_description: string;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  hotel_id: number;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;
}
