import { Client } from '../orm/entities/clients/Client';

export class ClientResponseDTO {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  isRegistered: boolean;

  constructor(client: Client) {
    this.id = client.client_id;
    this.firstName = client.first_name;
    this.middleName = client.middle_name;
    this.lastName = client.last_name;
    this.phone = client.phone;
    this.email = client.email;
    this.isRegistered = client.is_registered;
  }
}
