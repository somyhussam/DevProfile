self.addEventListener("push", function(event){

    console.log("Push Event وصل");

    let data = {
        title: "إشعار",
        body: "تم استلام Push"
    };

    if(event.data){
        try{
            data = event.data.json();
            console.log("Data:", data);
        }catch(e){
            console.log(e);
        }
    }

    event.waitUntil(
        self.registration.showNotification(data.title,{
            body:data.body,
            icon:"/icon.png",
            badge:"/icon.png",
            requireInteraction:true
        })
    );

});
