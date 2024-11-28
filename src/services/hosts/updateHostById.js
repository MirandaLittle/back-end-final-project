import { PrismaClient } from '@prisma/client'
import NotFoundError from '../../errors/NotFoundError.js'

const updateHostById = async (id, updatedHost) => {
  const prisma = new PrismaClient();
  const host = await prisma.host.updateMany({ // update 0 or more hosts
    where: {
      id
    },
    data: updatedHost
  });

  if (!host || host.count === 0) {
    throw new NotFoundError('Host', id)
  }

  return {
    message: `Host with id ${id} was updated!` // we don't return the updated host because updateMany doesn’t return anything other than the count of the updated objects
  }
};

export default updateHostById;