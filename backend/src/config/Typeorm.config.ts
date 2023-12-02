export const TypeOrmConfig: any = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '#Goblok123',
  database: 'db_project',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
}