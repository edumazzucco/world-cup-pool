import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Eduardo M",
      email: "edu.xd@hotmail.com",
      avatarUrl: "https://github.com/edumazzucco.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Pool 1",
      code: "POOL1",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-07T12:00:00.727Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-09T12:00:00.727Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "US",

      guesses: {
        create: {
          firstTeamPoints: 5,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
