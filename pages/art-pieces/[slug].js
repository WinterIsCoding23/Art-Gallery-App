import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const [artPiece, setArtPiece] = useState(null);

  useEffect(() => {
    if (router.query.slug) {
      // Fetch the art piece data based on the slug
      const fetchArtPieceData = async () => {
        const response = await fetch(`/api/art-pieces/${router.query.slug}`);
        const data = await response.json();
        setArtPiece(data);
      };
      fetchArtPieceData();
    }
  }, [router.query.slug]);

  const handleBackClick = () => {
    // Navigate back to the list view
    router.push("/");
  };

  return artPiece ? (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      onBackClick={handleBackClick}
    />
  ) : (
    <div>Loading...</div>
  );
}
