import axios from "axios";
import PersonRepository from "../repositories/personRepository.js";
import StarshipRepository from "../repositories/starshipRepository.js";

class SwapiService {
  constructor() {
    this.swapiBaseUrl = "https://swapi.dev/api/people";
    this.requestConfig = {
      timeout: 30000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  }

  async fetchPeople() {
    try {
      const response = await axios.get(this.swapiBaseUrl, this.requestConfig);
      return response.data.results.slice(0, 10); // Solo 10 primeros
    } catch (error) {
      console.error("Error obteniendo personajes ", error.message);
      throw new Error("Error al obtener personajes");
    }
  }

  async syncPeopleWithDatabase() {
    try {
      const people = await this.fetchPeople();
      let savedPeople = [];

      for (const person of people) {
        // Guardar el personaje en la BD
        const newPerson = await PersonRepository.create({
          name: person.name,
          height: person.height,
          mass: person.mass,
        });

        // guardar anves y asociarlas
        if (person.starships.length > 0) {
          for (const starshipUrl of person.starships) {
            const starshipData = await axios.get(starshipUrl);
            const { name, model } = starshipData.data;

            let starship = await StarshipRepository.findByName(name);

            if (!starship) {
              starship = await StarshipRepository.create({ name, model });
            }
            await newPerson.addStarship(starship);
          }
        }

        savedPeople.push(newPerson);
      }

      console.log("Sincronización completada.");
      return { data: savedPeople };
    } catch (error) {
      console.error("Error al sincronizar", error.message);
      throw new Error("Error al sincronizar");
    }
  }
}

export default new SwapiService();
