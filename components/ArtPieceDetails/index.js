import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const BackButton = styled.button`
  margin-top: 1rem;
`;

const ColorPalette = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Color = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
}) {
  const router = useRouter();

  return (
    <Container>
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <ColorPalette>
        {colors &&
          colors.map((color, index) => <Color key={index} color={color} />)}
      </ColorPalette>
      <Image src={image} alt={title} width={400} height={400} />
      <BackButton onClick={() => router.back()}>Back to List</BackButton>
    </Container>
  );
}
