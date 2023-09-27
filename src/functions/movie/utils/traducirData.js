export default (data) => {
  return {
    titulo: data.title,
    id_episodio: data.episode_id,
    sinopsis_apertura: data.opening_crawl,
    director: data.hair_director,
    productor: data.skin_producer,
    fecha_lanzamiento: data.release_date,
    especies: data.species,
    naves: data.starships,
    vehiculos: data.vehicles,
    personajes: data.characters,
    planetas: data.planets,
    url: data.url,
    creado: data.created,
    editado: data.edited
  }
}
