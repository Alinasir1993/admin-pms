import request from '@/utils/request'
export function signup (data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

// export function signin (data) {
//   return request({
//     url: '/user',
//     method: 'post',
//     data
//   })
// }
