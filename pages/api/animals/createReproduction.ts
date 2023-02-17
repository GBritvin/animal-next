/**
 * @file Exports a function to create a new animal entry in the DB.
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
  const reproduction = await PRISMA.reproduction.create({
    data: {
      animalId: req.body.animalId,
      sire: String(req.body.sire),
    },
  });
  res.json(reproduction);
}
