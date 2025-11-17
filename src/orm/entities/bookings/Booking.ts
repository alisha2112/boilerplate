import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Check } from 'typeorm';

import { Client } from '../clients/Client';
import { Hotel } from '../hotels/Hotel';
import { Room } from '../rooms/Room';

@Entity('bookings')
@Check(`"payment_method" IN ('cash', 'credit-card', 'online')`)
@Check(`"status" IN ('confirmed', 'cancelled')`)
export class Booking {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  booking_id: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  check_in: Date;

  @Column({
    type: 'date',
    nullable: false,
  })
  check_out: Date;

  @Column({
    type: 'int',
    nullable: false,
  })
  guests_count: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  payment_method: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  status: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  cancel_reason: string;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  hotel_id: number;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  client_id: number;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  room_id: number;

  @ManyToOne(() => Hotel)
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;

  @ManyToOne(() => Client, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @ManyToOne(() => Room, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'room_id' })
  room: Room;
}