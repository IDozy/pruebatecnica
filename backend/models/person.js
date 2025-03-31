import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Person extends Model {
    static associate(models) {
      this.belongsToMany(models.Starship, { through: "PersonStarship" });
    }
  }

  Person.init({
      name: DataTypes.STRING,
      height: DataTypes.STRING,
      mass: DataTypes.STRING,
      deletedAt: {  
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Person",
      timestamps: true,
      paranoid: true, 
    });

  return Person;
};
