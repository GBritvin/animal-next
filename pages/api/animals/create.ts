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
  const animals = await PRISMA.animal.create({
    data: {
      number: req.body.number,
      dateofbirth: "",
      gender: req.body.gender,
      breed: req.body.breed,
      rfid: req.body.rfid,
      groupId: Number(req.body.groupId),
    },
  });
  res.json(animals);
}
