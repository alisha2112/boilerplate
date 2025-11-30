import { Hotel } from '../orm/entities/hotels/Hotel';

export class HotelResponseDTO {
  id: number;
  name: string;
  location: string;
  description: string;
  policy: string;
  stars: number;

  constructor(hotel: Hotel) {
    this.id = hotel.hotel_id;
    this.name = hotel.name;
    this.location = hotel.location;
    this.description = hotel.description;
    this.policy = hotel.policy;
    this.stars = hotel.stars;
  }
}
