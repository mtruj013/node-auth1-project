
exports.up = function (knex) {
    return knex.schema
        .createTable('roles', tbl => {
            tbl.increments();
            tbl.string('name')
                .notNullable()
                .unique();
        })
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username')
                .unique()
                .notNullable();
            tbl.string('password')
                .notNullable()
            tbl.integer('role')
                .unsigned()
                .references('id')
                .inTable('roles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
};
