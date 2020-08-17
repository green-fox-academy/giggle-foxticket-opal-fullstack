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
  return db.createTable('Users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', unique: 'true', length: 25 },
    email: { type: 'string', unique: 'true', length: 25 },
    password: { type: 'string' },
  });
};

exports.down = function (db) {
  return db.dropTable('Users');
};

exports._meta = {
  version: 1,
};
