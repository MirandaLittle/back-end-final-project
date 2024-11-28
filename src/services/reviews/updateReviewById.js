import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updateReviewById = async (id, updatedReview) => {
  const prisma = new PrismaClient();
  const review = await prisma.review.updateMany({ // update 0 or more reviews
    where: {
      id
    },
    data: updatedReview
  });

  if (!review || review.count === 0) {
    throw new NotFoundError('Review', id)
  }

  return {
    message: `Review with id ${id} was updated!` // we don't return the updated review because updateMany doesn’t return anything other than the count of the updated objects
  }
};

export default updateReviewById;