import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  handleLike,
  isFavorite,
}) 

{ const router = useRouter();
  return (
    <Container>
      <Link href={`/art-pieces/${slug}`}>
        <h2>{title}</h2>
        <p>{artist}</p>
        <Image src={image} alt={slug} width={300} height={300} />
      </Link>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        handleLike={handleLike}
      />
    </Container>
  );
}
