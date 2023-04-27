import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://example-apis.vercel.app/api/art";

export default function Spotlight({ image, artist, title, slug }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  //console.log(data)

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
      <Link href={`art-pieces/${randomArtPiece.slug}`}>
        <Image
          src={randomArtPiece.imageSource}
          alt={randomArtPiece.slug}
          artist={randomArtPiece.artist}
          width={300}
          height={300}
        />{" "}
      </Link>
    </div>
  );
}
