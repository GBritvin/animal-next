/**
 * @file Exports a function to delete a new animal entry in the DB.
 */
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const PRISMA = new PrismaClient();

/**
 * Exposes API endpoint for creating an animal entry in the DB.
 *
 * @param {NextApiRequest} req - Request.
 * @param {NextApiResponse}res - Response.
 * @example - See below.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const animalId = req.query.id;
  const method = req.method;

  if (method === "DELETE") {
    await PRISMA.animal.delete({
      where: {
        id: Number(animalId),
      },
    });
  } else if (method === "GET") {
    const data = await PRISMA.animal.findUnique({
      where: {
        id: Number(animalId),
      },
      include: {
        vaccine: {
          orderBy: {
            id: "desc",
          },
          select: {
            nameofvax: true,
            dateofvax: true,
            id: true,
          },
        },
        weight: {
          orderBy: {
            id: "desc",
          },
        },
        reproduction: {
          orderBy: {
            id: "desc",
          },
        },
      },
    });
    res.json(data);
  } else return null;
}
