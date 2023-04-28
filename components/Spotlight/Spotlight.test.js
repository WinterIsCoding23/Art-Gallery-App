import { render, screen, within } from "@testing-library/react";
import Spotlight from ".";
import FavoriteButton from "../FavoriteButton";

const mockData = [
     {
     image: "fake-image-url1",
     title: "fake-title",
     artist: "fake-artist",
     slug: "fake-slug",
     isFavorite: "fake-art",
     favoriteSlugs: ["fake-art2"]
     },
     {
      image: "fake-image-url2",
      title: "fake-title",
      artist: "fake-artist",
      slug: "fake-slug",
      isFavorite: "fake-art",
      favoriteSlugs: ["fake-art3"]
     },
     {
     image: "fake-image-url3",
     title: "fake-title",
     artist: "fake-artist",
     slug: "fake-slug",
     isFavorite: "fake-art",
     favoriteSlugs: ["fake-art1"]
     },
];
 
   const handleLike = jest.fn();

// test("art piece image is displayed", () => {
//    render(<Spotlight src={mockData.image} alt="spotlight" />);
//    const artPieceImage = screen.getByRole("img");
//    expect(artPieceImage).toBeInTheDocument();
// });

// test("art piece artist is displayed", () => {
//   render(<Spotlight src={data.artist} alt="spotlight" />);
//   const artist = screen.getByText("artist");
//   expect(artist).toBeInTheDocument();
// });

// test("favorite-button is displayed in the spotlight view", () => {
//   render(<FavoriteButton src={data.artist} alt="spotlight" />);
//   const artist = screen.getByText("artist");
//   expect(artist).toBeInTheDocument();
// });


