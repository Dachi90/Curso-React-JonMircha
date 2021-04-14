import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, bio, lyric }) => {
  return (
    <div>
      <h3>Detalles</h3>
      <SongArtist />
      <SongLyric />
    </div>
  );
};

export default SongDetails;
