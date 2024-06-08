import slugify from "slugify";
export const slugit = (str) => {
  return slugify(str, { lower: true });
};
