import axios from 'axios'
const API_URL = "http://localhost:8080/api/courses"

class CourseService {
    //製作新課程
    post(title, description, price){
        let token;
        if(localStorage.getItem("user")){
            token = JSON.parse(localStorage.getItem("user")).token
        }else{
            token=""
        }
        return axios.post(
            API_URL,
            {
                title,description,price
            },
            {
                headers:{
                    Authorization:token
                }
            }
        )
    }

    // 用學生id,來尋找學生擁有的課
    getEnrolledCourse(_id){
        let token;
        if(localStorage.getItem("user")){
            token = JSON.parse(localStorage.getItem("user")).token
        }else{
            token=""
        }
        return axios.get(API_URL + "/student/" + _id,
        {
            headers:{
                Authorization:token
            }
        })
    }


    //用講師id,來尋找講師擁有的課程
    get(_id){
        let token;
        if(localStorage.getItem("user")){
            token = JSON.parse(localStorage.getItem("user")).token
        }else{
            token=""
        }
        return axios.get(
            API_URL + "/instructor/"+ _id,
        {
            headers:{
                Authorization:token
            }
        })
    }

    //用課程名稱來搜尋課程
    getCourseByName(name){
        let token;
        if(localStorage.getItem("user")){
            token = JSON.parse(localStorage.getItem("user")).token
        }else{
            token=""
        }
        return axios.get(API_URL + "/findByName/" +name, {
            headers:{
                Authorization:token
            }
        })
    }

    // 註冊課程
    enroll(_id){
        let token;
        if(localStorage.getItem("user")){
            token = JSON.parse(localStorage.getItem("user")).token
        }else{
            token=""
        }
        return axios.post(API_URL + "/enroll/" +_id ,
        {},{
            headers:{
                Authorization:token
            }
        })
    }
}

export default new CourseService()