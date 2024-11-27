import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updateAmenityById = async (id, name) => {
  const prisma = new PrismaClient();
  const existingAmenity = await prisma.amenity.findUnique({ where: { id } });
  if (!existingAmenity || existingAmenity.count === 0) {
    throw new NotFoundError('Amenity', id)
  } 
  console.log("name:", name)
  const amenity = await prisma.amenity.updateMany({ // update 0 or more categories
    where: {
      id
    },
    data: {
      name,
    }
  });



  return {
    message: `Amenity with id ${id} was updated!` // we don't return the updated amenity because updateMany doesn’t return anything other than the count of the updated objects
  }
};

export default updateAmenityById;