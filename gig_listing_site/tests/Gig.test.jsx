import React from "react";
import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Gig from "../src/Gig";

test("renders band_name passed", () => {
    render(<Gig
        band="Led Zeppelin"
        description="Performing for the first time in 20 years!"
        date="12/9/24"
        time="19:00"
        location="London"
        />);

        const paragraphElement = screen.getByText(/Led Zeppelin/);
        const firstLineText = paragraphElement.textContent.split('\n')[0];

        expect(firstLineText).toBe("Led Zeppelin")
})

test("renders description passed", () => {
    render(<Gig
        band="Led Zeppelin"
        description="Performing for the first time in 20 years!"
        date="12/9/24"
        time="19:00"
        location="London"
        />);


        expect(screen.getByTestId("custom1")).toHaveTextContent("Performing for the first time in 20 years!")
})

test("renders date and time passed", () => {
    render(<Gig
        band="Led Zeppelin"
        description="Performing for the first time in 20 years!"
        date="12/9/24"
        time="19:00"
        location="London"
        />);
        expect(screen.getByTestId("custom2")).toHaveTextContent("12/9/24 at 19:00")
})

test("renders location passed", () => {
    render(<Gig
        band="Led Zeppelin"
        description="Performing for the first time in 20 years!"
        date="12/9/24"
        time="19:00"
        location="London"
        />);


        expect(screen.getByTestId("custom3")).toHaveTextContent("London")
})


test("renders image", () => {
    render(<Gig
        band="Led Zeppelin"
        Image="./src/Paramore.jpg"
        description="Performing for the first time in 20 years!"
        date="12/9/24"
        time="19:00"
        location="London"
        />);

        // const img = screen.getByTestId("Image1");

        // expect(img).toBeInTheDocument();

        // expect(img.alt).toContain("Band Performance");

        const img2 = screen.getByAltText("Band Performance");

        expect(img2.src).toContain("http://localhost:3000/src/Paramore.jpg")


})


