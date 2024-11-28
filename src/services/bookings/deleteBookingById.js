import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteBooking = async (id) => {
  const prisma = new PrismaClient()


  const deleteBooking = await prisma.booking.deleteMany({ //delete 0 or more items, the delete (without Many) function throws error if not found, we want to use our own error handler
    where: {
      id
    }
  })

  if (!deleteBooking || deleteBooking.count === 0) {
    throw new NotFoundError('Booking', id)
  }

  return id
}
export default deleteBooking