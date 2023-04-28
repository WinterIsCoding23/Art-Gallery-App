// import { render, screen, within } from "@testing-library/react";
// import ArtPieces from ".";

// test("displays all art-pieces", () => {
//   //this is a mock data for testing we sent fake data to check if the test is working
//   const mockData = [
//     {
//       image: "fake-image-url1",
//       title: "fake-title",
//       artist: "fake-artist",
//       slug: "fake-slug",
//     },
//     {
//       image: "fake-image-url2",
//       title: "fake-title",
//       artist: "fake-artist",
//       slug: "fake-slug",
//     },
//     {
//       image: "fake-image-url3",
//       title: "fake-title",
//       artist: "fake-artist",
//       slug: "fake-slug",
//     },
//   ];

//   render(<ArtPieces pieces={mockData} />);
//   const list = screen.getByRole("list");
//   expect(list).toBeInTheDocument();
//   const listItems = screen.getAllByRole("listitem");
//   expect(listItems.length).toEqual(mockData.length);
// });
