let myLeads = new Object()
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const inputEl = document.getElementById("input-el")
const titleEl = document.getElementById("title-el")
const tableEl = document.getElementById("table-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads[titleEl.value] = inputEl.value
    inputEl.value=""
    titleEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // myLeads.push(tabs[0].url)
        const tabLink = tabs[0].url
        inputEl.value = tabLink
        // localStorage.setItem("myLeads", JSON.stringify(myLeads))
        // renderLeads()
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = new Object()
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    
    for (const key in myLeads) {
        listItems += `
        <tbody>
            <tr>
                <td>
                    ${key}
                </td>
                <td>
                    <a target='_blank' href='https://${myLeads[key]}'>
                        ${myLeads[key]}
                    </a>
                </td>
            </tr>
        </tbody`
    }
    tableEl.innerHTML += listItems
}