import { delay, http, HttpResponse } from "msw";
import { mockedUser } from "./fixture";

export const handlers = [
  http.post("*/users", async () => {
    await delay(500);
    return HttpResponse.json(mockedUser);
  }),
];
