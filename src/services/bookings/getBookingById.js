import { PrismaClient } from "@prisma/client";
import NotFoundError from '../../errors/NotFoundError.js'

const getBookingById = async (id) => {
  const prisma = new PrismaClient();
  const booking = await prisma.booking.findUnique({ //findUnique only works with id, not name etc
    where: { id },
  })

  if (!booking) {
    throw new NotFoundError('Booking', id)
  }

  return booking;
}

export default getBookingById   