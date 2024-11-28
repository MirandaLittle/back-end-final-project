import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteReview = async (id) => {
  const prisma = new PrismaClient()


  const deleteReview = await prisma.review.deleteMany({ //delete 0 or more items, the delete (without Many) function throws error if not found, we want to use our own error handler
    where: {
      id
    }
  })

  if (!deleteReview || deleteReview.count === 0) {
    throw new NotFoundError('Review', id)
  }

  return id
}
export default deleteReview