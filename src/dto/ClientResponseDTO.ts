import { Booking } from '../orm/entities/bookings/Booking';
import { Client } from '../orm/entities/clients/Client';
// Імпортуйте Booking, якщо TypeScript свариться

export class ClientResponseDTO {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  isRegistered: boolean;

  // Додаємо поле для бронювань
  bookings?: Booking[];

  constructor(client: Client) {
    this.id = client.client_id;
    this.firstName = client.first_name;
    this.middleName = client.middle_name;
    this.lastName = client.last_name;
    this.phone = client.phone;
    this.email = client.email;
    this.isRegistered = client.is_registered;

    // Присвоюємо бронювання
    this.bookings = client.bookings;
  }
}
