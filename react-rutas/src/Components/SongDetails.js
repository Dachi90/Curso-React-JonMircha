import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, bio, lyric }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? <Message msg={`Error: no existe la cancioón ${search.song}`} bgColor="#dc3545" /> : <SongLyric title={search.song} lyrics={lyric.lyrics} />}
      {bio.artists ? <SongArtist artist={bio.artists[0]} /> : <Message msg={`Error: no existe el interprete ${search.artist}`} bgColor="#dc3545" />}
    </>
  );
};

export default SongDetails;
