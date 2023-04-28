import { render, screen, within } from "@testing-library/react";
import ArtPieces from ".";

test("displays all art-pieces", () => {
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

   render(<ArtPieces 
    handleLike={handleLike} 
    favoriteSlugs={mockData[0].favoriteSlugs}
    pieces={mockData} />);
   const list = screen.getByRole("list");
   expect(list).toBeInTheDocument();
   const listItems = screen.getAllByRole("listitem");
   expect(listItems.length).toEqual(mockData.length);
 });
