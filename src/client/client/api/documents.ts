import { getBackendUnauthenticatedApi } from "api/apiGenerator";
import { DocumentMeta } from "Types/api";

export const getDocumentMeta = (documentId: string) =>
  getBackendUnauthenticatedApi<{ document: DocumentMeta }>(
    `/documents/meta/${documentId}`,
    {}
  );
