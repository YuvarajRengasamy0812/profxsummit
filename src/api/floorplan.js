import { Floorplan } from "./endpoints";
import { postApi } from "./post";

export const postFloorplan = (payload) => {
  return postApi(Floorplan, payload);
};
