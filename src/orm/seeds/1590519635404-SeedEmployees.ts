import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Employee } from '../entities/employees/Employee';

export class SeedEmployees1590519635404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const employeeRepository = getRepository(Employee);

    const employees = [
      {
        first_name: 'Mykola',
        middle_name: 'Ivanovych',
        last_name: 'Hrytsenko',
        phone: '+380501112233',
        position: 'General Manager',
        hotel_id: 1, // Grand Plaza Hotel
      },
      {
        first_name: 'Svitlana',
        middle_name: 'Petrovna',
        last_name: 'Zinchenko',
        phone: '+380672223344',
        position: 'Receptionist',
        hotel_id: 1,
      },
      {
        first_name: 'Bohdan',
        middle_name: 'Andriyovych',
        last_name: 'Lysenko',
        phone: '+380933334455',
        position: 'Concierge',
        hotel_id: 1,
      },
      {
        first_name: 'Mariia',
        middle_name: 'Serhiivna',
        last_name: 'Koval',
        phone: '+380504445566',
        position: 'Housekeeping Supervisor',
        hotel_id: 2, // Riverside Boutique
      },
      {
        first_name: 'Yaroslav',
        middle_name: 'Volodymyrovych',
        last_name: 'Pavlenko',
        phone: '+380675556677',
        position: 'Bellhop',
        hotel_id: 2,
      },
      {
        first_name: 'Anastasiia',
        middle_name: 'Oleksandrivna',
        last_name: 'Tkachuk',
        phone: '+380936667788',
        position: 'Spa Manager',
        hotel_id: 3, // Mountain View Lodge
      },
      {
        first_name: 'Vasyl',
        middle_name: 'Mykhailovych',
        last_name: 'Rudenko',
        phone: '+380507778899',
        position: 'Maintenance Technician',
        hotel_id: 3,
      },
      {
        first_name: 'Ihor',
        middle_name: 'Yurievych',
        last_name: 'Sydorov',
        phone: '+380678889900',
        position: 'Front Desk Agent',
        hotel_id: 4, // City Center Inn
      },
      {
        first_name: 'Kateryna',
        middle_name: 'Dmytrivna',
        last_name: 'Chernysh',
        phone: '+380939990011',
        position: 'Restaurant Manager',
        hotel_id: 5, // Sunset Beach Resort
      },
      {
        first_name: 'Roman',
        middle_name: 'Pavlovych',
        last_name: 'Bondar',
        phone: '+380500001122',
        position: 'Security Officer',
        hotel_id: 5,
      },
    ];

    for (const empData of employees) {
      const employee = new Employee();
      Object.assign(employee, empData);
      await employeeRepository.save(employee);
    }

    console.log(`✅ Seeded ${employees.length} employees.`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const employeeRepository = getRepository(Employee);
    await employeeRepository.clear();
    console.log('🧹 Cleared all employees.');
  }
}