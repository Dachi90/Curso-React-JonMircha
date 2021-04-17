import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, bio, lyric }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? <Message msg={`Error: no existe la cancioón ${search.song}`} bgColor="#dc3545" /> : <SongLyric />}
      {bio.artists ? <SongArtist /> : <Message msg={`Error: no existe el interprete ${search.artist}`} bgColor="#dc3545" />}
    </>
  );
};

export default SongDetails;
