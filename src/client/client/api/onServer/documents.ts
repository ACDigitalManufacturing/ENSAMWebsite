import { getUnauthenticatedApi } from "api/apiGenerator";
import { DocumentMeta } from "Types/api";

export const getDocumentMeta = (documentId: string) =>
  getUnauthenticatedApi<{ document: DocumentMeta }>(
    `api/document/meta/${documentId}`,
    {}
  );
