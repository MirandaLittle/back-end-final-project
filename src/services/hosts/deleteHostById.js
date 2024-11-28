import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const deleteHost = async (id) => {
  const prisma = new PrismaClient()


  const deleteHost = await prisma.host.deleteMany({ //delete 0 or more items, the delete (without Many) function throws error if not found, we want to use our own error handler
    where: {
      id
    }
  })

  if (!deleteHost || deleteHost.count === 0) {
    throw new NotFoundError('Host', id)
  }

  return id
}
export default deleteHost