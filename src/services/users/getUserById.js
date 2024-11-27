import { PrismaClient } from "@prisma/client";
import NotFoundError from '../../errors/NotFoundError.js'

const getUserById = async (id) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({ //findUnique only works with id, not name etc
    where: { id },
  })

  if (!user) {
    throw new NotFoundError('User', id)
  }

  return user;
}

export default getUserById   