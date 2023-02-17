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
  console.log(req.body.animalId);
  const vaccine = await PRISMA.vaccine.create({
    data: {
      animalId: req.body.animalId,
      vaxListId: Number(req.body.vaxListId),
    },
  });
  res.json(vaccine);
}
