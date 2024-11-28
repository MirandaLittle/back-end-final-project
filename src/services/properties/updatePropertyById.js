import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updatePropertyById = async (id, updatedProperty) => {
  const prisma = new PrismaClient();
  const property = await prisma.property.updateMany({ // update 0 or more properties
    where: {
      id
    },
    data: updatedProperty
  });

  if (!property || property.count === 0) {
    throw new NotFoundError('Property', id)
  }

  return {
    message: `Property with id ${id} was updated!` // we don't return the updated property because updateMany doesn’t return anything other than the count of the updated objects
  }
};

export default updatePropertyById;