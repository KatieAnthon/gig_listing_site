import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Favourited from "../src/components/favourite";


test('gig is has a favourite after selecting', async() => {
    render(<Favourited />);

    await userEvent.click(screen.getByTestId("Favourite-button"));

    expect(screen.getByTestId("Favourite-button")).toHaveTextContent("❤️ Favourited")
})
