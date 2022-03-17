export function getHost() {
  return (process.env.NEXT_PUBLIC_BACKEND_API_URI || "/api/v1");
}
