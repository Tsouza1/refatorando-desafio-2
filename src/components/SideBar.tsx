import { Button } from "./Button";

interface SideBarProps {
  genres: Array<GenreResponseProps>,
  onClickButton: (id: number) => void;
  onSelectGenreId: number,
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({genres, onClickButton, onSelectGenreId}:SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={onSelectGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}