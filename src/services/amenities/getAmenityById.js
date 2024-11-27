import { PrismaClient } from "@prisma/client";
import NotFoundError from '../../errors/NotFoundError.js'

const getAmenityById = async (id) => {
  const prisma = new PrismaClient()
  const amenity = await prisma.amenity.findUnique({ //findUnique only works with id, not name etc
    where: {
      id
    }
  })

  if (!amenity) {
    throw new NotFoundError('Amenity', id)
  }

  return amenity
}


export default getAmenityById    