
function updatedate(){
    const now=new Date(); 
 
    let hour=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    let da=now.getDate();
    let mo=now.getMonth();
    let ye=now.getFullYear();
    let ampm;
    let y=now.getDay();

    if (sec<10){
        sec='0'+sec;
    }
    if(min<10){
        min='0'+min;
    }
    if (mo<10){
        mo=mo+1;
        mo='0'+mo;
    }

  
    if(hour>12){
        ampm="PM";
        hour=hour%12;
        hour='0'+hour;
    }
    else if(hour==12){
        ampm="PM";
    }
   else {
        ampm='AM';
    }

    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let f =days[y-1];
    const  timestring = `${hour}:${min}:${sec} ${ampm}`;
    const  datestring=`${da}/${mo}/${ye} ${f}`;
    document.getElementById('date').innerText=datestring;
    document.getElementById('time').innerText= timestring;
}

setInterval(updatedate,1000);
updatedate();