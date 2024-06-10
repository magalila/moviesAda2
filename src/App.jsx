import { Layout } from "antd";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Error404 from "./pages/error404.jsx";
import Movie from "./pages/movie/movie.jsx";
import NewMovies from "./pages/new-movies.jsx";
import Popular from "./pages/popular.jsx";
import Search from "./pages/search/search.jsx";
import MenuTop from "./components/MenuTop/MenuTop.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <HashRouter basename="/">
        <Header className="header">
          <MenuTop />
        </Header>
        <Content style={{ minHeight: "fit-content" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
        <Footer />
      </HashRouter>
    </Layout>
  );
}

export default App;
