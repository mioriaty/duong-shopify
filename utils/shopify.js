import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.SHOP,
  storefrontAccessToken: "e88e542e3dc48b78ab825117814df1b5",
});

export { client };
