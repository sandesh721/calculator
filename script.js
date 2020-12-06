//button is to be triggered on click
//triggered button should in the input
//calculation 
let btn = document.getElementsByClassName("buttons");
  
function put(id){
  let inputs = document.querySelector('.int').value += id;


}
  function submit(){

    let last = document.querySelector('.int').value;
     let arr = [last].toString();
     let done = arr.split('');
     console.log(done[0])
 if(done[0]=='*'|| done[0]=='+' || done[0]=='-' ||done[0]=='/' || done[0]=='%'||done[0]=='u'){
  clr();
  
}
else{
  let result = eval(last);
  document.querySelector('.int').value=result;
 return false;
  }
}

  function clr(){
    document.getElementById("ints").value = "";
 
  }

  function backspace(){
     let ints = document.getElementById("ints").value ;
     let arr = [ints].toString();
     let done = arr.split('');
     let clear = done.pop();
     var joinstr = [];
     for(i=0; i<done.length; i++ )
      joinstr = joinstr + done[i]
    console.log(joinstr);
    document.getElementById("ints").value = joinstr;
     
  }

  function light(){
    var x =  document.getElementById('btn');
   if(x.textContent == 'Dark'){
     x.textContent = 'Light';
    document.querySelector("#calci").className='light';
   }
   else{
     x.textContent = 'Dark';
     document.querySelector("#calci").className= 'calci'
   }
   console.log("sandesh")
  }



