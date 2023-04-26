import ArtPieces from "../ArtPieces";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <Container>
      <Image src={image} alt={slug} width={50} height={50} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </Container>
  );
}
