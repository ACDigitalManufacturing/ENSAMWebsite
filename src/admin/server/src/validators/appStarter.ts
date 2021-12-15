export const verifyEnvironmentsVariables = ({
  DB_CONNECTION_STRING,
}: Record<string, string>) => {
  if (!DB_CONNECTION_STRING) throw new Error("DB_CONNECTION_STRING NOT FOUND");
};
