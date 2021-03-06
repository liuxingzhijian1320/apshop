/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wordbooktitle', {
    keyword: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    keywordDESC: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wordbooktitle'
  });
};
