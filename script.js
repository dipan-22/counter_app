const countvalue=document.querySelector('#counter');
// we can also use getelementbyid
// const increment =()=>
 function increment(){
    // get the value from ui
    let value = parseInt(countvalue.innerText);
    value=value+1;
    // update the value
    countvalue.innerText=value;
    
};

const decrement=()=>{
    let value = parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText=value;

};