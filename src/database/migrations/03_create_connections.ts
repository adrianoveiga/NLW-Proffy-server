// NOTE: This file was writted manually, because the knex,
// AT THE MOMENT, only create files with Javascript syntax,
// not in Typescript.

// Check http://knexjs.org/#Installation-migrations and
// http://knexjs.org/#Migrations-API for more details.

import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
             .notNullable()
             .references('id')
             .inTable('users')
             .onUpdate('CASCADE')
             .onDelete('CASCADE');
        
        table.timestamp('created_at')
             .defaultTo('now()')
             .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}
