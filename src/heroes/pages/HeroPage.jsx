import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getheroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hero = useMemo(() => getheroById(id), [id]);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearence: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={onNavigateBack} className="btn btn-primary">
          Regresar
        </button>
      </div>
    </div>
  );
};
