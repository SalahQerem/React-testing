export type User = {
  username: string;
  email: string;
  password: string;
};

// it("should display validation errors for invalid email", async () => {
//   render(<SignUp />);
//   const emailInput = getters.getEmailInput();
//   userEvent.type(emailInput, "test");
//   userEvent.click(document.body);
//   const validationMsg = await screen.findByText("Enter a valid email");
//   expect(validationMsg).toBeInTheDocument();
// });
// it("should display validation errors for short password", async () => {
//   render(<SignUp />);
//   const passwordInput = getters.getPasswordInput();
//   userEvent.type(passwordInput, "123");
//   userEvent.click(document.body);
//   const validationMsg = await screen.findByText(
//     "Password should be of minimum 8 characters length"
//   );
//   expect(validationMsg).toBeInTheDocument();
// });

// describe("Form Interaction", () => {
//   afterEach(() => jest.resetAllMocks());
//   it("should enable Sign Up button when form is valid", async () => {
//     render(<SignUp />);
//     const userNameInput = getters.getUsernameInput();
//     const emailInput = getters.getEmailInput();
//     const passwordInput = getters.getPasswordInput();
//     const signUpButton = getters.getSignUpButton();
//     await act(async () => {
//       await userEvent.type(userNameInput, mockedUser.username);
//       await userEvent.type(emailInput, mockedUser.email);
//       await userEvent.type(passwordInput, mockedUser.password);
//       expect(signUpButton).toBeEnabled();
//     });
//   });

//   it("should disable Sign Up button when form is invalid", async () => {
//     render(<SignUp />);
//     const signUpButton = getters.getSignUpButton();
//     expect(signUpButton).toBeDisabled();
//   });

//   it("should update form fields on user input", async () => {
//     render(<SignUp />);
//     const userNameInput = getters.getUsernameInput();
//     const emailInput = getters.getEmailInput();
//     const passwordInput = getters.getPasswordInput();
//     await act(async () => {
//       await userEvent.type(userNameInput, mockedUser.username);
//       await userEvent.type(emailInput, mockedUser.email);
//       await userEvent.type(passwordInput, mockedUser.password);
//       expect(userNameInput).toHaveValue(mockedUser.username);
//       expect(emailInput).toHaveValue(mockedUser.email);
//       expect(passwordInput).toHaveValue(mockedUser.password);
//     });
//   });

//   it("should redirect user to home page after successful signup", async () => {
//     render(<SignUp />);
//     debug();
//     await act(async () => {
//       await signUpUser(mockedUser);
//     });
//     await waitForElementToBeRemoved(getters.getSignUpButton());
//     debug();
//     await waitFor(() =>
//       expect(screen.getByText(/^products/i)).toBeInTheDocument()
//     );
//   });

//   it("should show loading state on sign-up button during form submission", async () => {
//     render(<SignUp />);
//     const signUpButton = getters.getSignUpButton();
//     debug();
//     await act(async () => {
//       await signUpUser(mockedUser);
//     });
//     debug();
//     expect(signUpButton).toHaveAttribute("disabled");
//   });
// });
