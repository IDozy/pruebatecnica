import starshipRepository from '../repositories/starshipRepository.js';

class StarshipService {
  async createStarship(data) {
    return await starshipRepository.create(data);
  }

  async getStarship(id) {
    return await starshipRepository.findById(id);
  }

  async getAllStarships() {
    return await starshipRepository.findAll();
  }

  async updateStarship(id, data) {
    return await starshipRepository.update(id, data);
  }

  async deleteStarship(id) {
    return await starshipRepository.delete(id);
  }
}

export default new StarshipService();
