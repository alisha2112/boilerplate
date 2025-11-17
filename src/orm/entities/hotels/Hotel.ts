import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Check, OneToMany } from 'typeorm';

import { Booking } from '../bookings/Booking';
import { Employee } from '../employees/Employee';
import { Room } from '../rooms/Room';
import { Service } from '../services/Service';

@Entity('hotels')
@Check(`"stars" >= 1 AND "stars" <= 5`)
export class Hotel {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  hotel_id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 75,
    nullable: false,
    unique: true,
  })
  location: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  policy: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  stars: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];

  @OneToMany(() => Employee, (employee) => employee.hotel)
  employees: Employee[];

  @OneToMany(() => Service, (service) => service.hotel)
  services: Service[];

  @OneToMany(() => Booking, (booking) => booking.hotel)
  bookings: Booking[];
}
