import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updateUserById = async (id, updatedUser) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.updateMany({ // update 0 or more users
    where: {
      id
    },
    data: updatedUser
  });

  if (!user || user.count === 0) {
    throw new NotFoundError('User', id)
  }

  return {
    message: `User with id ${id} was updated!` // we don't return the updated user because updateMany doesn’t return anything other than the count of the updated objects
  }
};

export default updateUserById;