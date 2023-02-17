/**
 * @file Exports a function to query DB for all animals.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const PRISMA = new PrismaClient();

/**
 * Exposes API endpoint for all animals in the DB.
 *
 * @param {NextApiRequest} req - Request.
 * @param {NextApiResponse} res - Response.
 * @example - await handler(req, res);.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const animals = await PRISMA.animal.findMany();
  res.json(animals);
}
