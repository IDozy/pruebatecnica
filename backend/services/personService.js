import personRepository from "../repositories/personRepository.js";

class PersonService {
  async createPerson(data) {
    return await personRepository.create(data);
  }

  async getPerson(id) {
    return await personRepository.findById(id);
  }

  async getAllPersons() {
    return await personRepository.findAll();
  }

  async updatePerson(id, data) {
    return await personRepository.update(id, data);
  }

  async deletePerson(id) {
    return await personRepository.delete(id);
  }

  async getPersonShips(id) {
    const person = await personRepository.findById(id);
    if (!person) {
      throw new Error("Persona no encontrada");
    }

    return await person.getStarships();
  }
}

export default new PersonService();
