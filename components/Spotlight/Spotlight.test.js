import { render, screen, within } from "@testing-library/react";
import Spotlight from ".";
import ArtPieces from "../ArtPieces";

test ("art piece image is displayed", ()=>{
    render (<Spotlight src={data.imageSource} alt="spotlight"/>);
    const artPieceImage = screen.getByRole("img");
    expect(artPieceImage).toBeInTheDocument();
})

test ("art piece artist is displayed", ()=>{
    render (<Spotlight src={image} alt="spotlight"/>);
    const artist = screen.getByText("artist");
    expect(artist).toBeInTheDocument();
})