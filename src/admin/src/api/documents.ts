import { DocumentMeta, Response } from "types/api"
import {
  postAuthenticatedApi,
  // getAuthenticatedApi,
  //   putAuthenticatedApi,
  // deleteAuthenticatedApi,
} from "./apiGenerator"

// Upload Document
interface CreateDocumentResponse {
  success: boolean
  document: DocumentMeta
}
type CreateDocumentRequest = FormData

//!
//! upload document - start
export const createDocument = (
  form: FormData,
  auth_token: string
): Promise<Response<CreateDocumentResponse>> =>
  postAuthenticatedApi<CreateDocumentRequest, CreateDocumentResponse>({
    url: `/api/documents`,
    params: {},
    auth_token,
    body: form,
  })
//! upload document - end
//!
