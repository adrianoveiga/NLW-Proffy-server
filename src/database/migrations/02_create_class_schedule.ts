// NOTE: This file was writted manually, because the knex,
// AT THE MOMENT, only create files with Javascript syntax,
// not in Typescript.

// Check http://knexjs.org/#Installation-migrations and
// http://knexjs.org/#Migrations-API for more details.

import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
             .notNullable()
             .references('id')
             .inTable('classes')
             .onUpdate('CASCADE')
             .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}
