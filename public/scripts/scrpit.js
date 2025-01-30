if(fetchedMessage){
    alert(fetchedMessage)
}else{
    console.log("no message")
}




function confirmAction(){
   
        let result = window.confirm("Are you want to edit the data ")
        if(result){
          alert("you clicked yes !")

        }else{
           alert("You clicked No !")
        }

    } 
let confirmActionButton = document.querySelector('.confirmAction')
console.log(confirmActionButton)
confirmActionButton.addEventListener('click',confirmAction)







