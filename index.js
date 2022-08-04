let createDiv = () => {
    //Popup for Div ________________________________________________________________________________________________________ 
    let createDivBox = document.createElement("div");
    createDivBox.innerHTML = "<p id=createBoxText>Add New List</p> <input type=text name=boxName id=BF1> <input name=add type=button value=Add id=button1> <input name=close  type=button value=Close id=button2>"
    document.querySelector("body").appendChild(createDivBox);
    createDivBox.setAttribute("id", "createBox");
    document.querySelector(".blur").classList.add("blurPage");



    //Add & Close Button____________________________________________________________________________________________________________
    let buttonOne = document.getElementById("button1")
    let buttonTwo = document.getElementById("button2")

    buttonOne.addEventListener("click", addDiv);
    document.getElementById("button1").addEventListener("click", () => {
        document.querySelector("body").removeChild(createDivBox);
        document.querySelector(".blur").classList.remove("blurPage");
        if (newPage = true) {
            document.querySelector("#newPageId").classList.remove("blurNewPage")
        }
    })


    buttonTwo.addEventListener("click", () => {
        document.querySelector("body").removeChild(createDivBox);
        document.querySelector(".blur").classList.remove("blurPage");
        if (newPage = true) {
            document.querySelector("#newPageId").classList.remove("blurNewPage")
        }
    })

}

//Create div__________________________________________________________________________________________________________________
let count = 0;
let addDiv = () => {
    let box = document.createElement("div");
    let input = document.getElementById("BF1").value;
    count = count + 1;

    if (input == "") {
        alert("Please add some Task");
        return false;
    }
    if (input != "") {
        box.innerHTML = `<div id=box${count}>${input}</div><hr></hr><img src="delete.png" class=icon1 id=icon1${count}><img src="Plus Icon.png" class=icon2 id=icon2${count}>`;
        document.querySelector(".boxDirection").appendChild(box);
        box.setAttribute("id", "boxDeg");
        box.setAttribute("class", `boxDeg${count}`);
    }



    //To delete div_______________________________________________________________________________________________________________
    let deleteButton = document.getElementById(`icon1${count}`)
    deleteButton.addEventListener("click", () => {
        document.querySelector(".boxDirection").removeChild(box);
    })


    //Popup for Text elements______________________________________________________________________________________________________
    let ElementButton = document.getElementById(`icon2${count}`)
    let countValue = count;
    let countText=0;
    ElementButton.addEventListener("click", () => {
        countText=countText+countValue+1;
        let addTextElement = document.createElement("div");
        addTextElement.innerHTML = "<p id=createBoxText>Add New Item</p> <input type=text name=boxName id=BF1> <input name=add type=button value=Add id=button1 class=button1${count}> <input name=close  type=button value=Close id=button2>"
        document.querySelector("body").appendChild(addTextElement);
        addTextElement.setAttribute("id", "createBox");
        document.querySelector(".blur").classList.add("blurPage");


        //Add & Close Button___________________________________________________________________________________________________________
        let textElement = () => {

            let textOne = document.createElement("div");
            let textInput = document.getElementById("BF1").value;

            if (textInput == "") {
                alert("Please add some Task");
                return false;
            }
            if (textInput != "") {
                textOne.innerHTML = `<span id=spanText${countValue}${countText}>${textInput}</span> <button id=markButton>Mark Done</button> `;
                document.querySelector(`.boxDeg${countValue}`).appendChild(textOne);
                textOne.setAttribute("id", `textList${countValue}${countText}`);    
            }

            let markButtonVar =document.getElementById(`markButton`)
            markButtonVar.addEventListener("click",()=> {
                document.querySelector(`#spanText${countValue}${countText}`).classList.add("strick");
                document.querySelector(`#textList${countValue}${countText}`).removeChild(markButtonVar);
            })
        }


        //Text List___________________________________________________________________________________________________________________
        let buttonThree = document.getElementById("button1")
        let buttonFour = document.getElementById("button2")

        buttonThree.addEventListener("click", textElement);
        document.getElementById("button1").addEventListener("click", () => {
            document.querySelector("body").removeChild(addTextElement);
            document.querySelector(".blur").classList.remove("blurPage");
            if (newPage = true) {
                document.querySelector("#newPageId").classList.remove("blurNewPage")
            }
        })

        buttonFour.addEventListener("click", () => {
            document.querySelector("body").removeChild(addTextElement);
            document.querySelector(".blur").classList.remove("blurPage");
            if (newPage = true) {
                document.querySelector("#newPageId").classList.remove("blurNewPage")
            }
        })

    })


    //New Page________________________________________________________________________________________________________________________
    let boxDiv = document.getElementById(`box${count}`);
    boxDiv.addEventListener("click", () => {
        let newPage = document.createElement("div");
        newPage.setAttribute("id", "newPageId")
        newPage.setAttribute("class", "newPageClass")
        document.querySelector("body").appendChild(newPage);

        newPage.innerHTML = `<img src="back.png" id=pageTwoIcon> <p class=back>Back</p> <h1 id=pageTwoHeading>${input}</h1> <img src="Plus Icon.png" class=img id=pg2plus> <div id=newPageBody></div>`;
        document.querySelector("#newPageBody").appendChild(box);
        document.querySelector(".blur").classList.add("blurPage1");
        let backButton = document.getElementById("pageTwoIcon");

        //Back Button________________________________________________________________________________________________________________
        backButton.addEventListener("click", () => {
            document.querySelector(".boxDirection").appendChild(box);
            document.querySelector("#body").removeChild(newPage);
            document.querySelector(".blur").classList.remove("blurPage1");
        })

        //New Page Popup for Div __________________________________________________________________________________________________
        let newPagePlus = document.getElementById("pg2plus");
        newPagePlus.addEventListener("click", createDiv)
        newPagePlus.addEventListener("click", () => {
            document.querySelector("#newPageId").classList.add("blurNewPage");
        });

        //New Page Popup for Text elements_________________________________________________________________________________________
        ElementButton.addEventListener("click", () => {
            document.querySelector("#newPageId").classList.add("blurNewPage");
        });
    })

}















