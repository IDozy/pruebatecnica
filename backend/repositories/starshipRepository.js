import db from "../models/index.js";

class StarshipRepository {
  async create(starshipData) {
    return await db.Starship.create(starshipData);
  }

  async findById(id) {
    return await db.Starship.findByPk(id);
  }

  async findAll() {
    return await db.Starship.findAll();
  }

  async update(id, newData) {
    const starship = await db.Starship.findByPk(id);
    if (starship) {
      return await starship.update(newData);
    }
    return null;
  }

  async delete(id) {
    const starship = await db.Starship.findByPk(id);
    if (starship) {
      await starship.destroy();
      return true;
    }
    return false;
  }
  
  async findByName(name) {
    return await db.Starship.findOne({ where: { name } });
  }
}

export default new StarshipRepository();
