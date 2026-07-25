self.addEventListener("push", function(event){

    let data = {};

    if(event.data){
        data = event.data.json();
    }

    event.waitUntil(

        self.registration.showNotification(

            data.title || "إشعار",

            {

                body:data.body || "",

                icon:"icon.png",

                badge:"icon.png"

            }

        )

    );

});
