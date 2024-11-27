import { PrismaClient } from '@prisma/client'

const getUsers =  async () => {
    const prisma = new PrismaClient({
        omit: {
          user: {
            password: true,
          },
        },
      });
  const usersWithoutPasswords = await prisma.user.findMany({});
  return usersWithoutPasswords;
    
};

export default getUsers;