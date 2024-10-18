
import { Link } from "react-router-dom";
import { Context } from "../store/context";
import { useContext, useEffect } from "react";


export const Home = () => {
  const { store: { characters }, actions: { getCharacters, setFavorites } } = useContext(Context)
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      {
        characters.map(personaje => {
          return (
            <div className="card " key={personaje.id}>
              <img className="imagen-top mt-2" src={personaje.image} alt="..." />
              <div className="card-body">
                <h5 className="card-title d-md-flex justify-content-md-center" >{personaje.name}</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <Link to={"/Personajes/"+personaje.id} className="btn btn-dark me-md-2">
                  More
                  </Link>
                  <button type="button" onClick={() => setFavorites(personaje)}><i className="fa-regular fa-heart"></i></button>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )

}
export default Home