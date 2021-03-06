// NOTE: This file was writted manually, because the knex,
// AT THE MOMENT, only create files with Javascript syntax,
// not in Typescript.

// Check http://knexjs.org/#Installation-migrations and
// http://knexjs.org/#Migrations-API for more details.

import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
             .notNullable()
             .references('id')
             .inTable('users')
             .onUpdate('CASCADE')
             .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}
