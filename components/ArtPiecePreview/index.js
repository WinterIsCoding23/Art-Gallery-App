import ArtPieces from "../ArtPieces";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export default function ArtPiecePreview({ imageSource, title, artist, slug }) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{artist}</p>
      <Image src={imageSource} alt={slug} width={300} height={300} />
    </Container>
  );
}
