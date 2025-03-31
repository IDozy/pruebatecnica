import { Model, DataTypes } from 'sequelize';

const StarshipModel = (sequelize) => {
  class Starship extends Model {
  
    static associate(models) {
      this.belongsToMany(models.Person, { through: "PersonStarship" });
    }
  }

  Starship.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Starship',
    timestamps: true,
  });

  return Starship;
};

export default StarshipModel;
