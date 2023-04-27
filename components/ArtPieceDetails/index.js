import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled.button`
  margin-top: 1rem;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBackClick,
}) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <Image src={image} alt={title} width={600} height={600} />
      <BackButton onClick={onBackClick}>Back to List</BackButton>
    </Container>
  );
}
