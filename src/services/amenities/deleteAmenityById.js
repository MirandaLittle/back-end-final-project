import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteAmenityById = async (id) => {
  const prisma = new PrismaClient()


  const deleteAmenity = await prisma.amenity.deleteMany({ //delete 0 or more items, the delete (without Many) function throws error if not found, we want to use our own error handler
    where: {
      id
    }
  })

  if (!deleteAmenity || deleteAmenity.count === 0) {
    throw new NotFoundError('Amenity', id)
  }

  return id
}
export default deleteAmenityById