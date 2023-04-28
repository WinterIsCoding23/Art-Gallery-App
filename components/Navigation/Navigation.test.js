import { render, screen, within } from "@testing-library/react";
import Navigation from ".";
import Header from "../Header/hearder";

const mockData = {
   link: "fake-URL",
};

test("navigation link labeled spotlight is displayed", () => {
   render(<Header />);
   const navigationLinks = screen.getByText(/spotlight/i);
   expect(navigationLinks).toBeInTheDocument();
});

test("navigation link labeled pieces is displayed", () => {
    render(<Header />);
    const spotlightLink = screen.getByText(/pieces/i);
    expect(spotlightLink).toBeInTheDocument();
});

// test("navigation link labeled pieces is displayed", () => {
//    render(<Spotlight />);
//    const piecesLink = screen.getByText("pieces");
//    expect(piecesLink).toBeInTheDocument();
// });
