async function getApiData(){
    let response =await fetch("https://demo0802490.mockable.io/")

    let data = await response.json()

    return data
}

let apiData = await getApiData();

// let questionList = apiData.pro

// console.log(questionList[0])
// getApiData();

// let p = fetch("https://demo0802490.mockable.io/")

// p.then(function(rawData){

//     rawData.json().then(function(finalData){
//         // console.log(finalData.question)
//     })
// })

function getTableRow(title,acceptance,difficulty){
    //access table body for append tr
   let accsstBody = document.querySelector('#table-body')

   //create table row.In table row we can append td
    let createTableRow = document.createElement('tr')

    //append the table row in table body.
    accsstBody.appendChild(createTableRow)

    //create table column .In table column pass the argument
    let tcolumn1 = document.createElement('td')

    //pass content in the tag.The actual content is in the json.So we have to pass json into html by using parameter.

    tcolumn1.innerText = `${title}`

    //create table column .In table column pass the argument
    let tcolumn2 = document.createElement('td')

    //pass second argument for second column
    tcolumn2.innerText = `${acceptance}`

    //create table column .In table column pass the argument
    let tcolumn3 = document.createElement('td')

    //pass third argument for third column
    tcolumn3.innerText = `${difficulty}`

    //append these column one by one
    createTableRow.append(tcolumn1);

    createTableRow.append(tcolumn2);

    createTableRow.append(tcolumn3);

    return accsstBody
}
// console.log(getTableRow('question','full','high'));


// getTableRow();