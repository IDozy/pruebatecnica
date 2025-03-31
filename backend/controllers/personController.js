import PersonService from '../services/personService.js'
import Swapiservice from '../services/swapiservice.js';


class PersonController {

  async syncPeople(req, res) {
    try {
      const result = await Swapiservice.syncPeopleWithDatabase();
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const newPerson = await PersonService.createPerson(req.body);
      res.status(201).json(newPerson);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const persons = await PersonService.getAllPersons();
      res.json(persons);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const person = await PersonService.getPerson(req.params.id);
      if (person) {
        res.json(person);
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await PersonService.updatePerson(req.params.id, req.body);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await PersonService.deletePerson(req.params.id);
      if (deleted) {
        res.json({ message: 'Persona eliminada' });
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  async getPersonShips(req, res) {
    try {
      const ships = await PersonService.getPersonShips(req.params.id);
      res.json(ships);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new PersonController();
