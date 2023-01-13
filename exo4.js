function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
   }
   
   
   //examples
   console.log(monthDiff(new Date(2023, 01), new Date(2023, 02))) // 1

 