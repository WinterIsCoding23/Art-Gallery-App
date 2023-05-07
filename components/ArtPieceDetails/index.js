import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";

const StyledArtPieceDetails = styled.div`
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    h2 {
      text-transform: uppercase;      
    }

    h4 {
      font-weight: 900;
      padding: 0px;
      margin: 5px;
    }

    p {
      padding: 0px;
      margin: 5px;
    }
  }
`;

const BackButton = styled.button`
  margin-top: 1rem;
  border-radius: 5px;
  background-color: grey;
  color: white;
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

const StyledImage = styled.img`
  border-radius: 5px;
  border: 2px solid black;
`

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
}) 

{
  const router = useRouter();
  // console.log("component colors", colors);

  return (
    <>
      <StyledArtPieceDetails>
        <h2>{title}</h2>
        <StyledImage src={image} alt={title} width={300} height={300} />
        <h4>{artist}</h4>
        <p style={{fontStyle: "italic"}}>{year}</p>
        <p>{genre}</p>
        <ColorPalette>
          {colors.map((color, index) => (
            <Color key={index} color={color} />
          ))}
        </ColorPalette>
        
        <BackButton onClick={() => router.back()}>Back to List</BackButton>
      </StyledArtPieceDetails>
    </>
  );
}
