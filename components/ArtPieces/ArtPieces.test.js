import { render, screen, within } from "@testing-library/react";
import ArtPieces from ".";

test("displays all art-pieces", async ()=> {
    render(<ArtPieces pieces={[]} />);
    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(11);

    // const {getAllByRole} = within(list);
    // const items = getAllByRole("listitem");
    // expect(items.length).toBe(11);
})


