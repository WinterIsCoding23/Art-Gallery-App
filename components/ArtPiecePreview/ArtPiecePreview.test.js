import { render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";

const mockData = {
  name: "fake-title",
  artist: "fake-artist",
  imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
  slug: "fake-slug",
};

test("it should display the title property from data", () => {
  render(<ArtPiecePreview title={mockData.name} />);
  const element = screen.queryByRole("heading");
  expect(element).toBeInTheDocument();
  expect(element.textContent).toEqual(mockData.name);
});

test("it should display image from data", () => {
  render(
    <ArtPiecePreview
      title={mockData.title}
      artist={mockData.artist}
      image={mockData.image}
      slug={mockData.slug}
    />
  );
  const element = screen.getByRole("img");
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("src", mockData.image);
});

test("it should display the artist from data", () => {
  render(<ArtPiecePreview artist={mockData.artist} />);
  const element = screen.getByText(mockData.artist);
  expect(element).toBeInTheDocument();
});
