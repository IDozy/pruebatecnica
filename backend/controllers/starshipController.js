import StarshipService from '../services/starshipService.js';

class StarshipController {
  async create(req, res) {
    try {
      const newStarship = await StarshipService.createStarship(req.body);
      res.status(201).json(newStarship);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const starships = await StarshipService.getAllStarships();
      res.json(starships);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const starship = await StarshipService.getStarship(req.params.id);
      if (starship) {
        res.json(starship);
      } else {
        res.status(404).json({ message: 'Nave no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await StarshipService.updateStarship(req.params.id, req.body);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).json({ message: 'Nave no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await StarshipService.deleteStarship(req.params.id);
      if (deleted) {
        res.json({ message: 'Nave eliminada' });
      } else {
        res.status(404).json({ message: 'Nave no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new StarshipController();
