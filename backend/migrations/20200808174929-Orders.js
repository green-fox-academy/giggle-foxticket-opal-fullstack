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
  return db.createTable('Orders', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    tickettype_id: {
      type: 'int',
      length: 10,
      notNull: true,
      foreignKey: {
        name: 'tickettype_id',
        table: 'tickettypes',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          tickettype_id: 'id'
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
  return db.dropTable('Orders');
};

exports._meta = {
  "version": 1
};
