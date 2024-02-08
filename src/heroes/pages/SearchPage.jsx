import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { useMemo } from "react";

/* eslint-disable react/no-unescaped-entities */
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchText, onInputChange } = useForm({ searchText: "" });
  const { q = "" } = queryString.parse(location.search);
  const heroes = useMemo(() => getHeroesByName(q), [q]);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length < 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);

    console.log(searchText);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="mt-3 btn btn-outline-primary">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
