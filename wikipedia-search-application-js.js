let inputVal = document.getElementById("searchInput");
let resultVal = document.getElementById("searchResults");

let spin = document.getElementById("spinner");

function createAndAppend(resulted) {
    let {
        link,
        title,
        description
    } = resulted;
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item")
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    resultVal.appendChild(resultItemEl);
}



function displayResults(searchedResults) {
    spin.classList.add("d-none");
    for (let resulted of searchedResults) {
        createAndAppend(resulted);
    }
}



function wikipeedia(event) {
    let values = inputVal.value;

    if (event.key === "Enter") {
        spin.classList.remove("d-none");
        resultVal.textContent = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + values;

        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayResults(search_results);
            });
    }
}

inputVal.addEventListener("keydown", wikipeedia);