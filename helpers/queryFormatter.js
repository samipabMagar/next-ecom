function formatQuery(searchParams) {
  let query = "";
  query += `sort=${searchParams?.sort ?? JSON.stringify({ createdAt: -1 })} `;

  if (searchParams?.name) query += `&name=${searchParams.name}`;
  if (searchParams?.brand) query += `&brand=${searchParams.brand}`;
  if (searchParams?.category) query += `&category=${searchParams.category}`;
  if (searchParams?.min) query += `&min=${searchParams.min}`;
  if (searchParams?.max) query += `&max=${searchParams.max}`;
  if (searchParams?.limit) query += `&limit=${searchParams?.limit}`;
  return query;
}

export default formatQuery;
