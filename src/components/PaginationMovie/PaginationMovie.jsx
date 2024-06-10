import { Pagination } from "antd";
import PropTypes from "prop-types";
import "./PaginationMovie.scss";

const PaginationMovie = (props) => {
  const { currentPage, totalItems, onChangePage } = props;
  return (
    <Pagination
      current={currentPage}
      total={totalItems}
      pageSize={20}
      onChange={onChangePage}
    />
  );
};

PaginationMovie.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default PaginationMovie;
