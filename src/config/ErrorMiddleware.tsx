import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.log("wwww", action)
    // if (action.payload.status === 403) {}

    if (action?.error?.message === "Rejected") {
        console.log("REJECTED: ", action.payload);
    }
  }

  return next(action);
};
