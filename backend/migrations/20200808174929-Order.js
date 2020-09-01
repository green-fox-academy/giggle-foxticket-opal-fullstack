'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('Order', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    ticket_type_id: {
      type: 'int',
      length: 10,
      notNull: true,
      foreignKey: {
        name: 'ticket_type_id',
        table: 'Tickettypes',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          ticket_type_id: 'id'
        }
      }
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
          onUpdate: 'RESTRICT'
        },
        mapping: {
          user_id: 'id'
        }
      }
    },
    status:{ type:'string' },
    ordered_at:{type:'timestamp'},
  });
};
exports.down = function(db) {
  return db.dropTable('Order');
};

exports._meta = {
  "version": 1
};
