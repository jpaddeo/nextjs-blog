function Podcast({ episodio }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/episode/${episodio}`}
      width='100%'
      height='232'
      frameBorder='0'
      allowtransparency='true'
      allow='encrypted-media'
    ></iframe>
  );
}

export default Podcast;
