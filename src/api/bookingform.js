import { BookingForm } from "./endpoints";
import { postApi } from "./post";

export const postBookingForm = (payload) => {
  return postApi(BookingForm, payload);
};
