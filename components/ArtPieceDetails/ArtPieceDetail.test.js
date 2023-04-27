import { render, screen, fireEvent } from "@testing-library/react";
import ArtPieceDetails from "./index";

const artPiece = {
  imageSource: "/image.png",
  name: "Art Piece Name",
  artist: "Art Piece Artist",
  year: "Art Piece Year",
  genre: "Art Piece Genre",
};

describe("ArtPieceDetails", () => {
  test("displays the art piece image", () => {
    render(<ArtPieceDetails {...artPiece} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", artPiece.imageSource);
    expect(image).toHaveAttribute("alt", artPiece.name);
  });

  test("displays the art piece title", () => {
    render(<ArtPieceDetails {...artPiece} />);
    const title = screen.getByText(artPiece.name);
    expect(title).toBeInTheDocument();
  });

  test("displays the art piece artist", () => {
    render(<ArtPieceDetails {...artPiece} />);
    const artist = screen.getByText(artPiece.artist);
    expect(artist).toBeInTheDocument();
  });

  test("displays the art piece year", () => {
    render(<ArtPieceDetails {...artPiece} />);
    const year = screen.getByText(artPiece.year);
    expect(year).toBeInTheDocument();
  });

  test("displays the art piece genre", () => {
    render(<ArtPieceDetails {...artPiece} />);
    const genre = screen.getByText(artPiece.genre);
    expect(genre).toBeInTheDocument();
  });

  test("displays a back button", () => {
    render(<ArtPieceDetails {...artPiece} />);
    const backButton = screen.getByRole("button", { name: "Back to List" });
    expect(backButton).toBeInTheDocument();
  });

  test("calls onBackClick when the back button is clicked", () => {
    const onBackClick = jest.fn();
    render(<ArtPieceDetails {...artPiece} onBackClick={onBackClick} />);
    const backButton = screen.getByRole("button", { name: "Back to List" });
    fireEvent.click(backButton);
    expect(onBackClick).toHaveBeenCalled();
  });
});
