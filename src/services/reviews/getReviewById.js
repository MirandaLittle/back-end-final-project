import { PrismaClient } from "@prisma/client";
import NotFoundError from '../../errors/NotFoundError.js'

const getReviewById = async (id) => {
  const prisma = new PrismaClient();
  const review = await prisma.review.findUnique({ //findUnique only works with id, not name etc
    where: { id },
  })

  if (!review) {
    throw new NotFoundError('Review', id)
  }

  return review;
}

export default getReviewById   