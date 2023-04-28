import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "../components/ArtPieceDetails/index";

const artPiece = {
  imageSource: "example.com/image.jpg",
  name: "Art Piece Title",
  artist: "Artist Name",
  year: "2022",
  genre: "Abstract",
  colors: ["#000", "#fff"],
};

test("displays the art piece image", () => {
  render(<ArtPieceDetails {...artPiece} />);
  const imageElement = screen.getByText(artPiece.imageSource);
  expect(imageElement).toBeInTheDocument();
});

test("displays the art piece title", () => {
  render(<ArtPieceDetails {...artPiece} />);
  const titleElement = screen.getByText(artPiece.name);
  expect(titleElement).toBeInTheDocument();
});

test("displays the art piece artist", () => {
  render(<ArtPieceDetails {...artPiece} />);
  const artistElement = screen.getByText(artPiece.artist);
  expect(artistElement).toBeInTheDocument();
});

test("displays the art piece year", () => {
  render(<ArtPieceDetails {...artPiece} />);
  const yearElement = screen.getByText(artPiece.year);
  expect(yearElement).toBeInTheDocument();
});

test("displays the art piece genre", () => {
  render(<ArtPieceDetails {...artPiece} />);
  const genreElement = screen.getByText(artPiece.genre);
  expect(genreElement).toBeInTheDocument();
});

test("displays a back button", () => {
  render(<ArtPieceDetails {...artPiece} />);
  const backButtonElement = screen.getByText("Back to List");
  expect(backButtonElement).toBeInTheDocument();
});
