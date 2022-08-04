const questionAnswers= document.querySelectorAll(".Q_A")


questionAnswers.forEach(function(questionAnswer) {
    const btn = questionAnswer.querySelector(".btn_cont")
    btn.addEventListener("click", ()  => {
        questionAnswers.forEach(function (item) {
            if(item !== questionAnswer){
                item.classList.remove("show")
            }
        })
        questionAnswer.classList.toggle("show")
    })
})

//traversing the dom
/*const btns = document.querySelectorAll(".btn_cont")
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const questionAnswer=e.currentTarget.parentElement.parentElement
        questionAnswer.classList.toggle("show")
    })
})
  */  
