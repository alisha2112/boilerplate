import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Check } from 'typeorm';

import { Booking } from '../bookings/Booking';

@Entity('payments')
@Check(`"method" IN ('online', 'cash', 'credit-card')`)
export class Payment {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  payment_id: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  payment_date: Date;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  method: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  is_paid: boolean;

  @Column({
    type: 'money',
    nullable: false,
  })
  amount: string;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  booking_id: number;

  @ManyToOne(() => Booking, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'booking_id' })
  booking: Booking;
}
