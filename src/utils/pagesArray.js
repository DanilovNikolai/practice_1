export default function getPagination(totalPages) {
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  return pages;
}
