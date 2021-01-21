function toggle(cell){
    let redChecker = cell.children[0]
    let blackChecker = cell.children[1]
    
    if(!redChecker.hidden && blackChecker.hidden){ // Red is ON, turn it off
        redChecker.hidden = true
        blackChecker.hidden = false
    }
    else if(redChecker.hidden && !blackChecker.hidden){ // Black is ON, turn it off
        blackChecker.hidden = true
    }
    else if(redChecker.hidden && blackChecker.hidden){
        redChecker.hidden = false
    }
}