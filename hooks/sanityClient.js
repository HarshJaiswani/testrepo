import { createClient } from "next-sanity";

const client = createClient({
  projectId: "b5mgkus2",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-10-03",
});

export default client;
