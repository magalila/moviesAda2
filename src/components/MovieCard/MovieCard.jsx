import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading.jsx";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const { url, loadingState } = props;
  const { results } = url;

  if (!results) {
    return (
      <div className={!loadingState ? "hidden" : null}>
        <Loading />
      </div>
    );
  }

  return (
    <Row gutter={[8, 32]} className="centrar">
      {results.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </Row>
  );
};

MovieCard.propTypes = {
  url: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  loadingState: PropTypes.bool.isRequired,
};

const CardMovie = (props) => {
  const { Meta } = Card;
  const {
    movie: { id, title, poster_path },
  } = props;

  let backdropPath;

  if (poster_path === null) {
    backdropPath =
      "https://i.pinimg.com/736x/04/85/5b/04855bae4a3237935ebfc655293400ca.jpg";
  } else {
    backdropPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  }
  return (
    <Col lg={6} className="centrar">
      <Link to={`/movie/${id}`}>
        <Card
          className="card"
          hoverable
          cover={<img alt={title} src={backdropPath} className="img-card" />}
        >
          <Meta title={title} className="title-card" />
        </Card>
      </Link>
    </Col>
  );
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
