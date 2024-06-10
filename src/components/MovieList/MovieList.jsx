import { List, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading.jsx";
import "./MovieList.scss";

const MovieList = (props) => {
  const { title, urlMovieList } = props;

  if (urlMovieList.loading || !urlMovieList.result) {
    return <Loading />;
  }

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={urlMovieList.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  urlMovieList: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    result: PropTypes.shape({
      results: PropTypes.arrayOf(
        PropTypes.shape({
          poster_path: PropTypes.string,
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
};

const RenderMovie = (props) => {
  const {
    movie: { poster_path, id, title },
  } = props;

  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}> {title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />}></Button>
      </Link>
    </List.Item>
  );
};

RenderMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieList;
