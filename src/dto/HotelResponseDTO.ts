import { Booking } from '../orm/entities/bookings/Booking';
import { Employee } from '../orm/entities/employees/Employee';
import { Hotel } from '../orm/entities/hotels/Hotel';
// Імпортуйте типи інших сутностей, якщо TypeScript буде сваритися
import { Room } from '../orm/entities/rooms/Room';
import { Service } from '../orm/entities/services/Service';

export class HotelResponseDTO {
  id: number;
  name: string;
  location: string;
  description: string;
  policy: string;
  stars: number;

  rooms?: Room[];
  employees?: Employee[];
  services?: Service[];
  bookings?: Booking[];

  constructor(hotel: Hotel) {
    this.id = hotel.hotel_id;
    this.name = hotel.name;
    this.location = hotel.location;
    this.description = hotel.description;
    this.policy = hotel.policy;
    this.stars = hotel.stars;

    this.rooms = hotel.rooms;
    this.employees = hotel.employees;
    this.services = hotel.services;
    this.bookings = hotel.bookings;
  }
}
