class Player{
    constructor(){

    }

    getState(){
        var playerCountref= database.ref("playerCount")
        playerCountref.on("value",function(data){
            playerCount = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            playerCount:state
        })
    }
}