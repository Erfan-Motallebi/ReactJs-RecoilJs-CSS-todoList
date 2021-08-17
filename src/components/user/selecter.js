import { selector } from "recoil";

export const fetchedUsers = selector({
  key: "fetchedUsers",
  get: async () =>
    await (
      await fetch("https://api.github.com/users", { method: "GET" })
    ).json(),
});
