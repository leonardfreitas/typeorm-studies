import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

import Class from 'models/Class';
import ClassRepository from 'repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.json(res);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
    return response.status(500).json({ error: 'Error de servidor' });
  }
});

classRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
  const repo = getCustomRepository(ClassRepository);
  const data = await repo.findByName(request.params.name);
  return response.json(data);
});

export default classRouter;
