import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import "./SliderMovies.scss";
//import React from 'react';
import PropTypes from "prop-types";

const SliderMovies = (props) => {
  const { newMovies } = props;

  if (newMovies.loading || !newMovies.result) {
    return <Loading />;
  }

  const { results } = newMovies.result;

  return (
    <Carousel autoplay>
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};

SliderMovies.propTypes = {
  newMovies: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    result: PropTypes.shape({
      results: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          backdrop_path: PropTypes.string,
          title: PropTypes.string.isRequired,
          overview: PropTypes.string,
        })
      ).isRequired,
    }),
  }).isRequired,
};

const Movie = (props) => {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url("${backdropPath}")` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary" className="boton">
              More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
  }).isRequired,
};

export default SliderMovies;
