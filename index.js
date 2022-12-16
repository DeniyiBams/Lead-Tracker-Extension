let inputBtn = document.getElementById("input-btn")
const myLeads = []
const inputEl = document.getElementById("input-el")

inputBtn.addEventListener("click", function() {
    let text = inputEl.value
    myLeads.push(text)
})