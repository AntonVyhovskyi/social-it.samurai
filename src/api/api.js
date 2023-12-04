import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6f28ae02-527f-4d87-958b-a122117ec064"}
    
}) 


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {  return response.data  }  )  },

    deleteFollow(uId) { return instance.delete(`follow/${uId}`) },
    postFollow (uId)  { return instance.post(`follow/${uId}`) },
    getProfile(userId) { return instance.get(`profile/${userId}`) }
}

export const authAPI = {
    me() {return instance.get(`auth/me`)},
    login(e) {return instance.post('auth/login', {email: e.login, password: e.password} )},
    unlogin() {return instance.delete('auth/login')}

}

export const profileAPI = {
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    savePhoto(file) {
        var formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
    }
}





