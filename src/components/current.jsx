let CurrentTime=()=>{
    let time=new Date(); 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return <p class="text-center">This is the current time : {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>  
   
    


}
export default CurrentTime