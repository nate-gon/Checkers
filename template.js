function cell(rowNum, cellNum) {
    var even = true
    if(cellNum % 2 == 1) even = false
    if (even){
        return `
        <div id="cell-1-${cellNum}" class="cell black" onclick="toggle(this)">
            <div class="checker red-checker"></div>
            <div class="checker black-checker" hidden></div>
        </div>
        `
    }else {
        return `<div id="cell-1-${cellNum}" class="cell red"></div>`
    }
    
}

function rowTemplate(){
    var rowString = ``
    for (var cellNum=1; cellNum<=8; cellNum++){
        rowString = rowString + cell(1, cellNum)
    }
    return rowString
}