import { MovieCard } from "./MovieCard";

interface MovieDetailsProps {
  moviesList: Array<MovieProps>,
  selectGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({ moviesList, selectGenre }: MovieDetailsProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {moviesList.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}