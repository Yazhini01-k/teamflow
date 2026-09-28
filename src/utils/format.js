export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const countBy = (items, key, value) =>
  items.filter((item) => item[key] === value).length;
