var siteName= document.getElementById("siteName");
var Url= document.getElementById("Url");
var linksInfo=[];
if (localStorage.getItem("newLink")== null){
    linksInfo =[];
}
else{
    linksInfo = JSON.parse(localStorage.getItem("newLink"))
    display()
}


function submit(){
    if(siteName.classList.contains("is-valid") && Url.classList.contains("is-valid")){
     var input = {
        Name : siteName.value,
        link : Url.value,
        }
        linksInfo.push(input);
        console.log(input);
        localStorage.setItem("newLink", JSON.stringify(linksInfo));
        clear()
        display()
 }
 else{
      alert("the data you have entered is not valid")
    };
}
function clear(){
    siteName.value= "";
    Url.value ="";
}
var cartona = ""
function display(){
    cartona=""
    for (var i = 0 ; i<linksInfo.length ; i++ ){
        cartona+=` 
            <div class="col-12">
                <div class="item bg-light d-flex">
                    <h3 class="h6 p-2 flex-fill text-center col-12 col-md-3">${i + 1}</h3>
                    <h3 class="h6 p-2 flex-fill text-center col-12 col-md-3">${linksInfo[i].Name} </h3>
                    <div class="item text-center col-12 col-md-3 p-1">
                        <button onclick="window.open('${linksInfo[i].link}', '_blank')" class="btn btn-success  text-center "><i class="fa-regular fa-eye"></i> visit</button>

                    </div>
                    <div class="item text-center col-12 col-md-3 p-1">
                        <button onclick="deleteLink(${i})" class="btn btn-danger "><i class="fa-solid fa-trash"></i> Delete</button>

                    </div>
                </div>
            </div>
        </div>`
    }
    document.getElementById("newLink").innerHTML=cartona;
}
function deleteLink(deletedLink){
linksInfo.splice(deletedLink,1);
display();
localStorage.setItem("newLink", JSON.stringify(linksInfo));

}
// function validationUrl (){
//     var regex = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,6}(\/[\w.-]*)*(\/?)$/ ;

//     var text = Url.value;
//     var result = regex.test(text);
//     if (result==true){
//         console.log("valid url");
        
//     }
//     if (result==false){
//         console.log("invalid input");
        
//     }

// }
// function validationName (){
//     var regex = /^[\w.*]+$/ ;

//     var text = siteName.value;
//     var result = regex.test(text);
//     if (result==true){
//         console.log("valid url");
        
//     }
//     if (result==false){
//         console.log("invalid input");
        
//     }

// }

function validateAll(element){
    var regex = {
        siteName :  /^[\w.*]{3,}$/ ,
        Url: /^(https?:\/\/)?[\w.-]+\.[a-z]{2,6}(\/[\w.-]*)*(\/?)$/ ,
    };
    if (regex[element.id].test(element.value)==true){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        element.nextElementSibling.classList.add("d-none")

    }
   else{
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
        element.nextElementSibling.classList.remove("d-none")



    };
}