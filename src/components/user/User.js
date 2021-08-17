import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { fetchedUsers } from "./selecter";

function User() {
  // TODO: User must appear here DONE:

  const newFetchedUsr = useRecoilValue(fetchedUsers);

  return (
    <div>
      <ul>
        {newFetchedUsr.map(({ avatar_url, login }, index) => {
          return (
            <li key={index}>
              <a href={avatar_url} alt={login}>
                {login}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function userResult() {
  return (
    <Suspense fallback={<div>loading . . . </div>}>
      <User />
    </Suspense>
  );
}
