import { render, screen, within } from "@testing-library/react";
import Spotlight from ".";

test ("navigation link labeled Spotlight is displayed", ()=>{
    render (<Spotlight src={data.imageSource} alt="spotlight"/>);
    const artPieceImage = screen.getByRole("img");
    expect(artPieceImage).toBeInTheDocument();
})

test ("navigation link labeled pieces is displayed", ()=>{
    render (<Spotlight src={data.artist} alt="spotlight"/>);
    const artist = screen.getByText("artist");
    expect(artist).toBeInTheDocument();
})