let searchInputEl=document.getElementById("searchInput");
let searchResultEl=document.getElementById("resultContainer");
let spinnerEl=document.getElementById("spinner");



searchInputEl.addEventListener("keydown",searchWikipedia);

function searchWikipedia(event){
    if(event.key  ===  "Enter"){

        spinnerEl.classList.remove("d-none");
    searchResultEl.textContent="";

    let searchInputs=searchInputEl.value;

    let url="https://apis.ccbp.in/wiki-search?search="+searchInputs;

    console.log(url);


let options={
    method:"GET"
};
fetch(url,options).then(function(response){
    return response.json();
}).then(function(jsonData){
    let {search_results}=jsonData;
    displayResults(search_results);
});              

    }
}
function displayResults(searchResult){
    spinnerEl.classList.add("d-none");

    for(let result of searchResult){
        createAndAppendSearchResult(result);
    }
}
function createAndAppendSearchResult(result){
    let {link,title,description}=result;
    // console.log(link);

    // console.log(title);

    // console.log(description);

    let resultItemEl=document.createElement("div");
    resultItemEl.classList.add("result_item");
    searchResultEl.appendChild(resultItemEl);

    let titleEl=document.createElement("a");
    titleEl.href=link;
    titleEl.target="_blank";
    titleEl.textContent=title;
    titleEl.classList.add("result_title");
    resultItemEl.appendChild(titleEl);

    let breakEl=document.createElement("br");
    resultItemEl.appendChild(breakEl);

    let urlElement=document.createElement("a");
    urlElement.href=link;
    urlElement.target="_blank";
    urlElement.textContent=link;
    urlElement.classList.add("result-url");
    resultItemEl.appendChild(urlElement);


    let breakedEl=document.createElement("br");
    resultItemEl.appendChild(breakedEl);

    let describtionEl=document.createElement("p");
    describtionEl.classList.add("link-describtion");
    describtionEl.textContent=description;
    resultItemEl.appendChild(describtionEl);
    

}
