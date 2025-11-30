import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Service } from '../entities/services/Service';

export class SeedServices1590519635408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const serviceRepository = getRepository(Service);

    const services = [
      {
        service_name: 'Spa Package',
        service_price: '2500',
        service_description: 'Full-body massage, facial, and aromatherapy session.',
        hotel_id: 1,
      },
      {
        service_name: 'Airport Transfer',
        service_price: '800',
        service_description: 'Luxury car pickup/drop-off from/to the airport.',
        hotel_id: 1,
      },
      {
        service_name: 'Gourmet Breakfast',
        service_price: '600',
        service_description: 'Premium breakfast with chef-prepared dishes and champagne.',
        hotel_id: 1,
      },
      {
        service_name: 'City Tour',
        service_price: '1200',
        service_description: 'Guided walking tour of Lviv Old Town.',
        hotel_id: 2,
      },
      {
        service_name: 'Wine Tasting',
        service_price: '900',
        service_description: 'Evening wine tasting with local sommelier.',
        hotel_id: 2,
      },
      {
        service_name: 'Hiking Guide',
        service_price: '1500',
        service_description: 'Professional guide for Carpathian mountain trails.',
        hotel_id: 3,
      },
      {
        service_name: 'Bonfire & Stories',
        service_price: '500',
        service_description: 'Evening bonfire with traditional songs and hot drinks.',
        hotel_id: 3,
      },
      {
        service_name: 'Laundry Express',
        service_price: '300',
        service_description: 'Same-day laundry and ironing service.',
        hotel_id: 4,
      },
      {
        service_name: 'Late Checkout',
        service_price: '400',
        service_description: 'Extend your checkout time until 18:00.',
        hotel_id: 4,
      },

      {
        service_name: 'Beach Yoga',
        service_price: '700',
        service_description: 'Morning yoga session on the beach with ocean view.',
        hotel_id: 5,
      },
      {
        service_name: 'Kids Club',
        service_price: '600',
        service_description: 'Supervised activities for children aged 3–12.',
        hotel_id: 5,
      },
      {
        service_name: 'Sunset Dinner',
        service_price: '1800',
        service_description: 'Private romantic dinner on the beach at sunset.',
        hotel_id: 5,
      },
    ];

    for (const serviceData of services) {
      const service = new Service();
      Object.assign(service, serviceData);
      await serviceRepository.save(service);
    }

    console.log(`✅ Seeded ${services.length} services.`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const serviceRepository = getRepository(Service);
    await serviceRepository.clear();
    console.log('🧹 Cleared all services.');
  }
}
