import commonAPI from "./CommonAPI"
import SERVERURL from "./Url"


//saveVideoAPI -post http request , add component

export const saveStaffAPI = async (staffDetails)=>{
    return await commonAPI(`POST` , `${SERVERURL}/staffdetails` , staffDetails)
}

// get the data from the server

export const getStaffDetailsAPI = async ()=>{
    return await commonAPI('GET' , `${SERVERURL}/staffdetails`, {} )
}

// delete data from the server
export const removeStaffDetailsAPI = async (id)=>{
    return await commonAPI('DELETE' , `${SERVERURL}/staffdetails/${id}`, {})
}
//edit the data
export const updateStaffDetailsAPI = async (id, data) => {
    return await commonAPI('PUT', `${SERVERURL}/staffdetails/${id}`, data);
  };
  
  export const getStaffDetailsForUpdationAPI = async (id) => {
    return await commonAPI('GET', `${SERVERURL}/staffdetails/${id}`, {});
  };










  export const saveAuditoriumAPI = async (auditoriumDetails) => {
    return await commonAPI("POST", `${SERVERURL}/auditorium`, auditoriumDetails);
  };
  
  export const getAuditoriumDetailsAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/auditorium`, {});
  };
  
  
  export const removeAuditoriumDetailsAPI = async (id)=>{
    return await commonAPI('DELETE' , `${SERVERURL}/auditorium/${id}`, {})
}
  
  
  export const updateAuditoriumDetailsAPI = async (id, data) => {
    return await commonAPI("PUT", `${SERVERURL}/auditorium/${id}`, data);
  };
  
  export const getAuditoriumDetailsForUpdationAPI = async (id) => {
    return await commonAPI("GET", `${SERVERURL}/auditorium/${id}`, {});
  };
  