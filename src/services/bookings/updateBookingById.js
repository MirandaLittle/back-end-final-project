import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updateBookingById = async (id, updatedBooking) => {
  const prisma = new PrismaClient();
  const booking = await prisma.booking.updateMany({ // update 0 or more bookings
    where: {
      id
    },
    data: updatedBooking
  });

  if (!booking || booking.count === 0) {
    throw new NotFoundError('Booking', id)
  }

  return {
    message: `Booking with id ${id} was updated!` // we don't return the updated booking because updateMany doesn’t return anything other than the count of the updated objects
  }
};

export default updateBookingById;