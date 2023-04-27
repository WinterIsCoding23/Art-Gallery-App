import ArtPieces from "../ArtPieces";
import styled from "styled-components";
import Image from "next/image";

import FavoriteButton from "../FavoriteButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export default function ArtPiecePreview({ image, title, artist, slug }) {
  //console.log("image ", image)
  return (
    <Container>
      <h2>{title}</h2>
      <p>{artist}</p>
      <Image src={image} alt={slug} width={300} height={300} />
      <FavoriteButton />
    </Container>
  );
}
