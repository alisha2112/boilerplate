import { getRepository } from 'typeorm';

import { Hotel } from '../orm/entities/hotels/Hotel';
import { CustomError } from '../utils/response/custom-error/CustomError';

export class HotelService {
  private hotelRepository = getRepository(Hotel);

  async findAll(): Promise<Hotel[]> {
    return await this.hotelRepository.find({
      relations: ['rooms', 'employees', 'services', 'bookings'],
    });
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOne({
      where: { hotel_id: id },
      relations: ['rooms', 'employees', 'services', 'bookings'],
    });

    if (!hotel) {
      throw new CustomError(404, 'General', `Hotel with id:${id} not found.`, ['Hotel not found.']);
    }
    return hotel;
  }

  async create(hotelData: Partial<Hotel>): Promise<Hotel> {
    try {
      const hotel = this.hotelRepository.create(hotelData);
      return await this.hotelRepository.save(hotel);
    } catch (err) {
      if (err.code === '23505') {
        throw new CustomError(409, 'General', 'Hotel name or location must be unique', [
          'Name and location must be unique.',
        ]);
      }
      throw new CustomError(400, 'Raw', 'Error creating hotel', null, err);
    }
  }

  async update(id: number, updateData: Partial<Hotel>): Promise<Hotel> {
    const hotel = await this.findOne(id); // Reuse findOne logic

    try {
      Object.assign(hotel, updateData);
      return await this.hotelRepository.save(hotel);
    } catch (err) {
      if (err.code === '23505') {
        throw new CustomError(409, 'General', 'Hotel name or location must be unique', [
          'Name and location must be unique.',
        ]);
      }
      throw new CustomError(400, 'Raw', 'Error updating hotel', null, err);
    }
  }

  async delete(id: number): Promise<void> {
    const hotel = await this.findOne(id);
    await this.hotelRepository.remove(hotel);
  }
}