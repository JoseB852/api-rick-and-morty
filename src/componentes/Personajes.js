import { Context } from "../store/context"
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Personajes = () => {

  const { id } = useParams();

  const { store: { characterInfo }, actions: { todosCharcaters } } = useContext(Context)
  useEffect(() => {
    todosCharcaters(id);
  }, []);
  return (

    <>
      <div className="container">
        <div className="perfil">
          <img src={characterInfo.image} alta="" />
        </div>
        <div className="descripcion">
          <div className="list mt-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-white bg-black">{characterInfo.id}</li>
              <li className="list-group-item text-white bg-black">Name: {characterInfo.name}</li>
              <li className="list-group-item text-white bg-black">Status: {characterInfo.status}</li>
              <li className="list-group-item text-white bg-black">Specie: {characterInfo.species}</li>
              <li className="list-group-item text-white bg-black">Gender: {characterInfo.gender}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/">
          <button className="btn1" type="button">Back</button>
        </Link>
      </div>
    </>
  )
}
export default Personajes