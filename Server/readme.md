Migration command: 

npx typeorm migration:create src/migrations/<migration_name>
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d src/config/data-source.ts migration:run
