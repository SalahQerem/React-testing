import { http, HttpResponse } from "msw";
import { mockedUser } from "./fixture";
import { User } from "./types";
interface Response {
  user: User;
}

export const handlers = [
  http.post("*/users", async ({ request }) => {
    const body = (await request.json()) as Response;

    if (body!.user.username === "salahqerem")
      return HttpResponse.json(
        { error: "Internal Server Error" },
        { status: 400 }
      );

    return HttpResponse.json(mockedUser);
  }),
];
