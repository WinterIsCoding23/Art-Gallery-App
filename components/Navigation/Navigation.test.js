import { render, screen, within } from "@testing-library/react";
import Navigation from ".";

const mockData = {
    link
}

test ("navigation links are displayed", ()=>{
    render (<Spotlight />);
    const navigationLinks = screen.getAllByRole("link");
    expect(navigationLinks).toBeInTheDocument();
})

test ("navigation link labeled spotlight is displayed", ()=>{
    render (<Spotlight />);
    const spotlightLink = screen.getByText("spotlight");
    expect(artist).toBeInTheDocument();
})

test ("navigation link labeled pieces is displayed", ()=>{
    render (<Spotlight />);
    const piecesLink = screen.getByText("pieces");
    expect(piecesLink).toBeInTheDocument();
})