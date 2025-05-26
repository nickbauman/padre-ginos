export default async function getPastOrders(page) {
  const response = await fetch(`"/api/past-orders?page="${page}`);
  if (!response.ok) {
    throw new Error(`"Network response error " ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
