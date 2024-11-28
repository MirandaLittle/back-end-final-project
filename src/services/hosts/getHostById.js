import { PrismaClient } from "@prisma/client";
import NotFoundError from '../../errors/NotFoundError.js'

const getHostById = async (id) => {
  const prisma = new PrismaClient();
  const host = await prisma.host.findUnique({ //findUnique only works with id, not name etc
    where: { id },
  })

  if (!host) {
    throw new NotFoundError('Host', id)
  }

  return host;
}

export default getHostById   