import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";

const queryClient = new QueryClient();
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("can we submit a contact form", async () => {
  fetchMocker.mockResponseOnce(
    JSON.stringify({
      status: "ok",
    }),
  );

  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>,
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const msgInput = screen.getByPlaceholderText("Message");

  const testData = {
    name: "Test User",
    email: "testing@example.com",
    message: "This is a test message",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  msgInput.value = testData.message;

  const btn = screen.getByRole("button", { name: "Send" });

  btn.click();

  const h3 = await screen.findByRole("heading", { level: 3 });
  expect(h3.innerText).toContain("Submitted!");

  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    body: JSON.stringify(testData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
});
