import axios, { multiplePutAxios, getAxiosBlob } from "../baseAxios.js";
import {ENDPOINTS} from '../endpoints.js'


/**
 * hàm lấy danh sách yêu cầu theo filter
 * author: vinhkt (22/09/2022)
 * created: 22/09/2022 4h utc
 * @param {params: {pageSize, pageNumber, requestFilter} } params
 * @returns
 */
export async function getRequestsFilter(params) {
  const endpoint = ENDPOINTS.REQUESTS_FILTER;
  return await axios.getAxios(endpoint, params);
}

/**
 * hàm xoá yêu cầu theo id
 * author: vinhkt
 * created: 22/09/2022 4h utc
 * @param {id} params 
 * @returns 1 nếu thành công
 */
export async function deleteRequest(id) {
  const endpoint = ENDPOINTS.REQUESTS + '/' + id;
  return await axios.deleteAxios(endpoint);
}

/**
 * call api thêm mới yêu cầu
 * @param {json body} body 
 * @returns id của yêu cầu được thêm mới
 * author: vinhkt(22/09/2022)
 */
export async function postRequest(body) {
  const endpoint = ENDPOINTS.REQUESTS;
  return await axios.postAxios(endpoint, body);
}

/**
 * call api sửa yêu cầu
 * @param {id của yêu cầu cần sửa} id 
 * @param {json body} body 
 * @returns 1 nếu thành công
 * author: vinhkt (22/09/2022)
 */
export async function putRequest(id, body) {
  const endpoint = ENDPOINTS.REQUESTS + '/' + id;
  return await axios.putAxios(endpoint, body);
}

/**
 * xoá hàng loạt yêu cầu
 * @param {mảng id cần xoá} ids 
 * @returns 
 */
export async function deleteMultipleRequests(ids) {
  const endpoint = ENDPOINTS.MULTIPLE_DELETE_REQUEST;
  return await multiplePutAxios(endpoint, ids);
}

/**
 * từ chối hàng loạt yêu cầu
 * @param {mảng id cần từ chối} ids 
 * @returns 
 */
 export async function denineMultipleRequests(ids) {
  const endpoint = ENDPOINTS.MULTIPLE_DENINE_REQUEST;
  return await multiplePutAxios(endpoint, ids);
}

/**
 * duyệt hàng loạt yêu cầu
 * @param {mảng id cần duyệt} ids 
 * @returns 
 */
 export async function approveMultipleRequests(ids) {
  const endpoint = ENDPOINTS.MULTIPLE_APPROVE_REQUEST;
  return await multiplePutAxios(endpoint, ids);
}


/**
 * xuất file excel các yêu cầu theo filter
 * @param {filter} requestFilter
 * @returns 
 */
 export async function exportAllRequestsFilter(requestFilter) {
  const endpoint = ENDPOINTS.EXPORT_REQUEST_FILTER;
  return await getAxiosBlob(endpoint, requestFilter);
}

/**
 * hàm lấy yêu cầu theo id
 * author: vinhkt (22/09/2022)
 * created: 22/09/2022 4h utc
 * @param {params: {requestId} } requestId
 * @returns
 */
 export async function getRequestDetail(requestId) {
  const endpoint = ENDPOINTS.REQUESTS + `/${requestId}`;
  return await axios.getAxios(endpoint);
}