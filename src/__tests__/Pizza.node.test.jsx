import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.alt).toBe(name);
  expect(img.src).toBe(src);
});

test("to have a default image if non is provided", async () => {
  const name = "My Favorite Pizza";
  const screen = render(<Pizza name={name} description="super cool pizza" />);

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
