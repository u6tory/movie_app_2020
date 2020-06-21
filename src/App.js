import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // 1) async + axios를 통해 데이터를 가져오고, setState으로 데이터를 적용한다.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get( // axios로 fetch한다.
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  // 2) Component Mount가 끝나면 미리 정의해둔 (1)함수를 실행한다.
  componentDidMount = () => this.getMovies();

  // 3) Movie.js에 설정해둔 Function Component로 state의 data를 넣어 mapping한다.
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {" "}
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
