/**
 * 
 * @param {number} unixTimeStamp 
 */
export const formatDateByTimeStamp=(unixTimeStamp)=>{
    const date=new Date(unixTimeStamp*1000);
    const options={year:'numeric',month:'long',day:'numeric'};
    const formattedDate = date.toLocaleDateString("en-US",options);
    const formattedTime=date.toLocaleTimeString('en-US',{hour: '2-digit', minute: '2-digit'});

    return {
        formattedDate,formattedTime
    }
};