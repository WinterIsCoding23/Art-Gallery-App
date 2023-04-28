import { render, screen, within } from "@testing-library/react";
import Spotlight from ".";
import FavoriteButton from "../FavoriteButton";

test("art piece image is displayed", () => {
  render(<Spotlight src={data.imageSource} alt="spotlight" />);
  const artPieceImage = screen.getByRole("img");
  expect(artPieceImage).toBeInTheDocument();
});

test("art piece artist is displayed", () => {
  render(<Spotlight src={data.artist} alt="spotlight" />);
  const artist = screen.getByText("artist");
  expect(artist).toBeInTheDocument();
});

test("favorite-button is displayed in the spotlight view", () => {
  render(<FavoriteButton src={data.artist} alt="spotlight" />);
  const artist = screen.getByText("artist");
  expect(artist).toBeInTheDocument();
});


