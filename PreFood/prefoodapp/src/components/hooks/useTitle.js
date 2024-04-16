import { useEffect } from "react";
 export const useTitle =(title) => {
useEffect(()=>{
document.title =`${title} - PreFood`


},[title])

    return null;
 }