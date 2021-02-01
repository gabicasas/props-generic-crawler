if(Array.isArray(dataNormalized) && dataNormalized.length>0 && dataNormalized[0].marketId){
    //console.log("mercados"); 
    
    
    /*********Esto va a un mapper que será codigo personalizado *********** */
    for(let i in dataNormalized){
        let mh = {};//new MarketHistory();
       
        mh.marketId=dataNormalized[i].marketId;
        mh.marketStatus=dataNormalized[i].marketStatus;
        mh.timestamp=new Date();
        mh.runnerDetails=[];
        let runnerDetails =dataNormalized[i].runnerDetails;
        runnerDetails.forEach(runnerDetail => {
            let rDetail = {};//new RunnerDetail();
            rDetail.runnerStatus = runnerDetail.runnerStatus;
            rDetail.selectionId = runnerDetail.selectionId;
            //No estoy seguro que esta cuota sea correcta
            rDetail.quota = runnerDetail.runnerOdds.trueOdds.decimalOdds.decimalOdds;
            mh.runnerDetails.push(rDetail);
         });
     /* ******************************************************************* */
        this.marketHRepository.save(mh).then(result => { console.log("Saved");});
    } 
   }