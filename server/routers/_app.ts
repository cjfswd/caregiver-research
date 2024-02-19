import { z } from 'zod';
import { procedure, router } from '../trpc';
import { client } from '@/utils/mongodb';

export const costumerZ = z.object({
  app: z.boolean(),
  cellphone: z.union([z.string(), z.undefined()]),
  email: z.union([z.string().email(), z.undefined()]),
  firstName: z.union([z.string().max(100), z.undefined()]),
  juridical: z.boolean(),
  lastName: z.union([z.string().max(100), z.undefined()]),
  market: z.boolean(),
  money: z.string(),
  oportunity: z.boolean(),
  quantity: z.union([z.string(), z.number()]),
  report: z.string(),
  scale: z.union([z.string(), z.number()])
})

export const workerZ = z.object({
  cellphone: z.union([z.string(), z.undefined()]),
  commission: z.boolean(),
  duty: z.boolean(),
  email: z.union([z.string().email(), z.undefined()]),
  income: z.string(),
  money: z.string(),
  firstName: z.union([z.string().max(100), z.undefined()]),
  lastName: z.union([z.string().max(100), z.undefined()]),
  oportunity: z.boolean(),
  scale: z.union([z.string(), z.number()])
})

export const undefinedZ = z.object({
  cellphone: z.undefined(),
  email: z.undefined(),
  firstName: z.undefined(),
  lastName: z.undefined(),
})

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  costumer: procedure
    .input(
      costumerZ
    )
    .query(async (opts) => {
      const connection = await client.connect()
      const db = client.db('caregiverResearch')
      const collection = db.collection('costumer')
      if (await collection.countDocuments() == 500) return;
      if (!undefinedZ.safeParse({ email: opts.input.email, cellphone: opts.input.cellphone, firstName: opts.input.firstName, lastName: opts.input.lastName }).success && await collection.findOne({ email: opts.input.email, cellphone: opts.input.cellphone })) return;
      await collection.insertOne(opts.input)
      if (process.env.NODE_ENV == 'development') console.log(await collection.find({}).toArray())
      await connection.close()
      return true
    }),
  worker: procedure
    .input(
      workerZ
    )
    .query(async (opts) => {
      const connection = await client.connect()
      const db = client.db('caregiverResearch')
      const collection = db.collection('worker')
      if (await collection.countDocuments() == 500) return;
      if (!undefinedZ.safeParse({ email: opts.input.email, cellphone: opts.input.cellphone, firstName: opts.input.firstName, lastName: opts.input.lastName }).success && await collection.findOne({ email: opts.input.email, cellphone: opts.input.cellphone })) return;
      await collection.insertOne(opts.input)
      if (process.env.NODE_ENV == 'development') console.log(await collection.find({}).toArray())
      await connection.close()
      return true
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;