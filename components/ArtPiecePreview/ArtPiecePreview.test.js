import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

const mockData = [{
  name: "fake-title",
  artist: "fake-artist",
  imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
  slug: "fake-slug",
  isFavorite: true,
},

{name: "fake-title2",
artist: "fake-artist2",
imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red2.jpg",
slug: "fake-slug2",
isFavorite: false,
}]

const handleLike = jest.fn();

test("each art piece's title is displayed", () => {
  render(<ArtPiecePreview 
    title={mockData[0].name} 
    image={mockData[0].imageSource} 
    artist={mockData[0].artist} 
    slug={mockData[0].slug} 
    isFavorite={mockData[0].isFavorite} 
    handleLike={handleLike}/>);
  //const element = screen.queryByRole("heading");
  const element = screen.getByText(mockData[0].name);
  expect(element).toBeInTheDocument();
  expect(element.textContent).toEqual(mockData[0].name);
});

test("each art piece's image is displayed", () => {
  render(
    <ArtPiecePreview
     title={mockData[0].name}
     artist={mockData[0].artist}
     image={mockData[0].imageSource}
     slug={mockData[0].slug}
     handleLike={handleLike}
     isFavorite={mockData[0].isFavorite}
    />
  );
  const element = screen.getByRole("img");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("src", mockData[0].image);
});

test("each art piece's artist is displayed", () => {
  render(<ArtPiecePreview      
    title={mockData[0].name}
    artist={mockData[0].artist}
    image={mockData[0].imageSource}
    slug={mockData[0].slug}
    handleLike={handleLike}
    isFavorite={mockData[0].isFavorite} />);
  const element = screen.getByText(mockData[0].artist);
  expect(element).toBeInTheDocument();
});

