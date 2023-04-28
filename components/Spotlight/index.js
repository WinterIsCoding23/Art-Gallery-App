import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import FavoriteButton from "../FavoriteButton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://example-apis.vercel.app/api/art";

export default function Spotlight({
  image,
  artist,
  title,
  slug,
  handleLike,
  favoriteSlugs,
}) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  function getRandomArtPiece(data) {
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];
  }
  const randomArtPiece = getRandomArtPiece(data);
  return (
    <div>
      <h2>{randomArtPiece.name}</h2>
      <p>{randomArtPiece.artist}</p>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.slug}
        artist={randomArtPiece.artist}
        width={300}
        height={300}
      />
      <FavoriteButton favoriteSlugs={favoriteSlugs} handleLike={handleLike} slug={slug}/>
      {/* {console.log("favoriteSlugs: ", favoriteSlugs)} */}
    </div>
  );
}
