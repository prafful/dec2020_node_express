var myimport = require('./library/dateUtility')

function useImports(){
    console.log(myimport.getCurrentDate())
    console.log(myimport.getCurrentDay())
    console.log(myimport.getCurrentTime())
    
}

useImports()