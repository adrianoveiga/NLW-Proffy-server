// NOTE: This file was writted manually, because the knex,
// AT THE MOMENT, only create files with Javascript syntax,
// not in Typescript.

// Check http://knexjs.org/#Installation-migrations and
// http://knexjs.org/#Migrations-API for more details.

import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}
