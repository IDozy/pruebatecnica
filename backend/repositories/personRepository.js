import db from '../models/index.js';

class PersonRepository {
  async create(personData) {
    return await db.Person.create(personData);
  }

  async findById(id) {
    return await db.Person.findByPk(id);
  }

  async findAll() {
    return await db.Person.findAll();
  }

  async update(id, newData) {
    const person = await db.Person.findByPk(id);
    if (person) {
      return await person.update(newData);
    }
    return null;
  }

  async delete(id) {
    const person = await db.Person.findByPk(id);
    if (person) {
      await person.destroy();
      return true;
    }
    return false;
  }
}

export default new PersonRepository(); 
