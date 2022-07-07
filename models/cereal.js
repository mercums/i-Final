export default (sequelize, DataTypes) => {
  const Cereals = sequelize.define(
    'Cereals',
    {
      cereal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      cereal_name: {
        type: DataTypes.STRING,
      },
      hot_cold: {
        type: DataTypes.STRING,
      },
      calories: {
        type: DataTypes.INTEGER,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Cereals;
};