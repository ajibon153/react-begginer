import { createClient } from "contentful";

export default createClient({
  //   space: "koz886ahmg12",
  //   accessToken: "KeAJYS4fJPQ74Cw43BuXRQdrn0SIurdW-bv_yH1GHm8",

  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_API_ACCESS_TOKEN,
});
