import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {

  constructor(@InjectRepository(Property) private propertyRepo: Repository<Property>) {}

  create(createPropertyDto: CreatePropertyDto) {
    console.log('This action adds a new property');
    return this.propertyRepo.insert(createPropertyDto)    
  }

  findAll(): Promise<Property[]> {
    console.log('fetching.....');
    return this.propertyRepo.find();
  }

  findOne(id: number) {
    console.log(`This action returns a #${id} property`);
    return this.propertyRepo.findOne(id);
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    console.log(`This action updates a #${id} property`);
    return this.propertyRepo.update(id, updatePropertyDto)
  }

  remove(id: number) {
    console.log(`This action removes a #${id} property`);
    return this.propertyRepo.delete(id);
  }
}
