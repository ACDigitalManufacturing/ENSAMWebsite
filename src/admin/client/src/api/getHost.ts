export function getHost(): string {
  return (process.env.REACT_APP_BACKEND || "") + "/api/v1";
}
