import { PrismaClient } from '@prisma/client'

const getUsers =  async () => {
    const prisma = new PrismaClient({
        omit: {
          User: {
            password: true,
          },
        },
      });
  const usersWithoutPasswords = await prisma.user.findMany({});
  return usersWithoutPasswords;
    
};

export default getUsers;