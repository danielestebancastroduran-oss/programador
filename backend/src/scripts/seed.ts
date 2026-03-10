import { AppDataSource } from '../data-source';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';

async function run() {
  await AppDataSource.initialize();
  const repo = AppDataSource.getRepository(User);
  const username = process.env.SEED_USER || 'admin';
  const password = process.env.SEED_PASS || 'admin123';

  const existing = await repo.findOne({ where: { username } });
  if (existing) {
    console.log('Usuario ya existe:', username);
    await AppDataSource.destroy();
    return;
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = repo.create({ username, password: hashed });
  await repo.save(user);
  console.log('Usuario creado:', username);
  await AppDataSource.destroy();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
