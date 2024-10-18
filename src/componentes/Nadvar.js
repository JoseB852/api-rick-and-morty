import React from 'react'
import { Context } from '../store/context';
import { useContext } from "react";


export const Nadvar = () => {
  const { store: { favorites }, actions: { deleteFavorites, index } } = useContext(Context)

  return (
    <div>

      <nav className="navbar">
        <div className="container-fluid">
          <img className="image-nadvar" src="https://i.ytimg.com/vi/Dfu5mAXy0J4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-DoACuAiKAgwIABABGFAgZShNMA8=&rs=AOn4CLA8wTmRtcHoYaihEf9ya8eFWt0aDQ" alt="" width="50" height="50" />
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <li className="nav dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button type="button" className="btn btn-dark">Favorites</button>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                {
                  favorites.map((char, index) => <li><a className="dropdown-item" href="#">{char.name}<i className="fa-solid fa-trash-can" onClick={() => deleteFavorites(index)}></i></a></li>
                  )}
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </div>
  )
}
