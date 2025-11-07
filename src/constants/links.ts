export const PAGES = {
  home: "/",
  faq: "/README.mdFAQ",
  blog: "/blog",
  contactUs: "/contactUs",
  products: "/products",
  ProductDetails: function (id: number) {
    return `/products/${id}`;
  },
};
