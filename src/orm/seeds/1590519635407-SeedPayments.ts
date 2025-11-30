import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Payment } from '../entities/payments/Payment';

export class SeedPayments1590519635407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const paymentRepository = getRepository(Payment);

    const payments = [
      {
        payment_date: new Date('2025-11-28'),
        method: 'credit-card',
        is_paid: true,
        amount: '6000',
        booking_id: 1,
      },
      {
        payment_date: new Date('2025-11-18'),
        method: 'online',
        is_paid: false,
        amount: '1200',
        booking_id: 2,
      },
      {
        payment_date: new Date('2025-12-08'),
        method: 'cash',
        is_paid: true,
        amount: '2700',
        booking_id: 3,
      },
      {
        payment_date: new Date('2025-12-12'),
        method: 'online',
        is_paid: true,
        amount: '3000',
        booking_id: 4,
      },
      {
        payment_date: new Date('2025-11-20'),
        method: 'credit-card',
        is_paid: false,
        amount: '2800',
        booking_id: 5,
      },
      {
        payment_date: new Date('2025-12-18'),
        method: 'online',
        is_paid: true,
        amount: '1200',
        booking_id: 6,
      },
      {
        payment_date: new Date('2026-01-03'),
        method: 'cash',
        is_paid: true,
        amount: '600',
        booking_id: 7,
      },
      {
        payment_date: new Date('2026-01-05'),
        method: 'credit-card',
        is_paid: true,
        amount: '8000',
        booking_id: 8,
      },
    ];

    for (const paymentData of payments) {
      const payment = new Payment();
      Object.assign(payment, paymentData);
      await paymentRepository.save(payment);
    }

    console.log(`✅ Seeded ${payments.length} payments.`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const paymentRepository = getRepository(Payment);
    await paymentRepository.clear();
    console.log('🧹 Cleared all payments.');
  }
}
