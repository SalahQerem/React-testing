import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import React from "react";
import SignUp from "./";
import { mockedSuccessUser, mockedUnSuccessUser, mockedUser } from "./fixture";
import { handlers } from "./handlers";
import { User } from "./types";
import { debug } from "jest-preview";
import axios from "axios";
// Setting up the mock server
const server = setupServer(...handlers);

const getters = {
  getUsernameInput: () => screen.getByLabelText(/^User Name/),
  getEmailInput: () => screen.getByLabelText(/^Email Address/),
  getPasswordInput: () => screen.getByLabelText(/^Password/),
  getSignUpButton: () => screen.getByRole("button", { name: /Sign Up/ }),
};

export const signUpUser = async (mockedUser: User) => {
  const emailInput = getters.getEmailInput();
  const passwordInput = getters.getPasswordInput();
  const userNameInput = getters.getUsernameInput();
  const signUpButton = getters.getSignUpButton();

  // await act(async () => {
  await userEvent.type(userNameInput, mockedUser.username);
  await userEvent.type(emailInput, mockedUser.email);
  await userEvent.type(passwordInput, mockedUser.password);
  expect(userNameInput).toHaveValue(mockedUser.username);
  expect(emailInput).toHaveValue(mockedUser.email);
  expect(passwordInput).toHaveValue(mockedUser.password);
  await userEvent.click(signUpButton);
  // });
};

jest.setTimeout(10000);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("SignUp Component", () => {
  afterEach(() => jest.resetAllMocks());
  describe("Validation", () => {
    it("should display success message on successful sign-up", async () => {
      render(<SignUp />);
      debug();
      const signUpButton = getters.getSignUpButton();
      await signUpUser(mockedUser);
      debug();
      await waitForElementToBeRemoved(signUpButton);
      debug();
      await waitFor(() =>
        expect(screen.getByText("Sign Up Successfully!")).toBeInTheDocument()
      );
      debug();
    });
    // it("should display error message on sign-up failure", async () => {
    //   render(<SignUp />);
    //   await signUpUser(mockedUnSuccessUser);
    //   await waitFor(() =>
    //     expect(screen.getByText(/Error Signing Up!/)).toBeInTheDocument()
    //   );
    // });
  });
});
