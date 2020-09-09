'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  // eslint-disable-next-line no-unused-vars
  type = dbm.dataType;
  // eslint-disable-next-line no-unused-vars
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('Ticket', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    order_id: {
      type: 'int',
      length: 10,
      notNull: true,
      foreignKey: {
        name: 'order_id',
        table: 'Order',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
        },
        mapping: {
          order_id: 'id',
        },
      },
    },
    user_id: {
      type: 'int',
      length: 10,
      notNull: true,
      foreignKey: {
        name: 'user_id',
        table: 'Users',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
        },
        mapping: {
          user_id: 'id',
        },
      },
    },
    ticket_status: { type: 'string' },
    expiration_date: { type: 'datetime' },
  });
};

exports.down = function (db) {
  return db.dropTable('Ticket');
};

exports._meta = {
  version: 1,
};
