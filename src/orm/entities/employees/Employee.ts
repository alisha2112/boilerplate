import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Hotel } from '../hotels/Hotel';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  employee_id: number;

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
    length: 50,
    nullable: false,
  })
  position: string;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  hotel_id: number;

  @ManyToOne(() => Hotel, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'hotel_id' })
  hotel: Hotel;
}
