// Function to navigate between tools
function navigateTools(direction) {
    // Get all the tools
    var allTools = document.querySelectorAll('.tools-content')
    
    // Find the tool with class 'active' and swap classes with the next
    for(let i = 0; i < allTools.length; i++) { 
        if(allTools[i].classList.contains('active')) {
            allTools[i].classList.add('hidden')
            allTools[i].classList.remove('active')

            if(direction === "NEXT") {
                if(i === allTools.length-1) {
                    allTools[0].classList.add('active')
                    allTools[0].classList.remove('hidden')
                } else {
                    allTools[i + 1].classList.add('active')
                    allTools[i + 1].classList.remove('hidden')
                }
            } else if(direction === "PREV"){
                if(i === 0) {
                    allTools[allTools.length-1].classList.add('active')
                    allTools[allTools.length-1].classList.remove('hidden')
                } else {
                    allTools[i - 1].classList.add('active')
                    allTools[i - 1].classList.remove('hidden')
                }
            }
            break;
        }
    }
}