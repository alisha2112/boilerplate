import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Booking } from '../bookings/Booking';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  client_id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  middle_name: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    length: 13,
    nullable: false,
    unique: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  is_registered: boolean;

  @OneToMany(() => Booking, (booking) => booking.client)
  bookings: Booking[];
}
