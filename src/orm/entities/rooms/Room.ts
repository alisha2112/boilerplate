import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Check } from 'typeorm';

import { Hotel } from '../hotels/Hotel';

@Entity('rooms')
@Check(`"comfort_level" IN ('luxury', 'comfort', 'premium', 'standard')`)
@Check(`"status" IN ('available', 'occupied', 'maintenance')`)
export class Room {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  room_id: number;

  @Column({
    type: 'int',
    nullable: false,
    unique: true,
  })
  room_number: number;

  @Column({
    type: 'money',
    nullable: false,
  })
  price_per_night: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  capacity: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  comfort_level: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  status: string;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  hotel_id: number;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;
}
