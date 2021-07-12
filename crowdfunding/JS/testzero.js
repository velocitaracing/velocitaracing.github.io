$("#close-process").click(function(){

    // document.getElementById("text").value = ''
    $(".slabs").removeClass("slab-active");
    $(".slabs i").removeClass("arrow-active");
    $(".pay-mobile-card").removeClass("pay-active");
    $(".slab-1").click()
    
      
      $('.slab-1').addClass("slab-active");
      $('.slab-1').find("i").addClass("arrow-active");
      $('.slab-1').find(".pay-mobile-card").addClass("pay-active");

    
});
      
      
    $(".slab-1").click(function(){
        document.getElementById("slab-name").innerHTML = "1C ENGINE"
        document.getElementById("payment-amount").innerHTML = "100.00"
        // document.getElementById("qr-generate").src = "./QRS/QR.png"
        document.getElementById("slab-info-name").innerHTML = "Single Cylinder Engine"
        document.getElementById("slab-info-para").innerHTML = "A single-cylinder engine is a piston engine with one cylinder. They are often used for motorcycles, motor scooters, go-karts, all-terrain vehicles, radio-controlled vehicles, portable tools and garden machinery (such as lawnmowers, cultivators, and string trimmers)."
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=100&tn=Velocita%20Racing%20Crowdfunding%201CENGINE";
        document.getElementById("dis-one").value = "1C ENGINE"
        document.getElementById("dis-two").value = "100"
        document.getElementById("goodies").innerHTML = " <li>Newsletter Subscription</li><li>Shout out on Website</li><li>Invite to unveil</li>"
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 12.png"
        $("#edit-money").css({'display': 'none'});

        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=100&tn=Velocita%20Racing%20Crowdfunding%201cENGINE")

        document.getElementById("click-here").innerHTML = '<a href="#ex1" rel="modal:open">Click here</a>'
        


        $("#qr-generate").css({'display':'none'});
        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);

        document.getElementById('worth-details').innerHTML='1C Engine worth INR 100'
    });

    $(".slab-2").click(function(){
        document.getElementById("slab-name").innerHTML = "V2 (V-TWIN)"
        document.getElementById("payment-amount").innerHTML = "500.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("slab-info-name").innerHTML = "V2 V-Twin"
        document.getElementById("goodies").innerHTML = " <li>Newsletter Subscription</li><li>Shout out on Website</li><li>Invite to unveil</li><li>Offer on official merchandise</li"

        document.getElementById("slab-info-para").innerHTML = "A V-twin engine, also called a V2 engine, is a two-cylinder piston engine where the cylinders share a common crankshaft and are arranged in a V configuration. Although widely associated with motorcycles (installed either transversely or longitudinally), V-twin engines have also been used for industrial engines and in several small cars. The V-twin design dates back to the late 1880s."
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=500&tn=Velocita%20Racing%20Crowdfunding%20V2V-TWIN"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=500&tn=Velocita%20Racing%20Crowdfunding%20V2V-TWIN")

        document.getElementById("dis-two").value = "500"
        document.getElementById("dis-one").value = "V2 V-TWIN"
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 3.png"
        $("#edit-money").css({'display': 'none'});
        // document.getElementById("click-here").innerHTML = '<a href="#ex2" rel="modal:open">Click here</a>'
        $("#qr-generate").css({'display':'none'});


        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);
            document.getElementById('worth-details').innerHTML='V2 V-Twin worth INR 500'
    });

    $(".slab-3").click(function(){
        document.getElementById("slab-name").innerHTML = "I3 (INLINE 3)"
        document.getElementById("payment-amount").innerHTML = "1,000.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("slab-info-name").innerHTML = "I3 Inline 3"
        document.getElementById("goodies").innerHTML = " <li>Newsletter Subscription</li><li>Shout out on Website</li><li>Invite to unveil</li><li>Offer on official merchandise</li><li>Wrist band</li>"

        document.getElementById("slab-info-para").innerHTML = "A straight-three engine (also called an inline-triple or inline-three) is a three-cylinder piston engine where cylinders are arranged in a line along a common crankshaft. Less common than straight-four engines, straight-three engines have nonetheless been used in various motorcycles, cars and agricultural machinery."
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 10.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1000&tn=Velocita%20Racing%20Crowdfunding%20I3-INLINE-3"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1000&tn=Velocita%20Racing%20Crowdfunding%20I3-INLINE-3")

        document.getElementById("dis-one").value = "I3 INLINE 3"
        document.getElementById("dis-two").value = "1000"
        document.getElementById('worth-details').innerHTML='I3 INLINE 3 worth INR 1,000'
        $("#edit-money").css({'display': 'none'});
        $("#qr-generate").css({'display':'none'});
        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);

            
    });

    $(".slab-4").click(function(){
        document.getElementById("slab-name").innerHTML = "I4 (INLINE 4)"
        document.getElementById("payment-amount").innerHTML = "1,500.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("slab-info-name").innerHTML = "I4 Inline 4"
        document.getElementById("goodies").innerHTML = " <li>Newsletter Subscription</li><li>Shout out on Website</li><li>Invite to unveil</li><li>Offer on official merchandise</li><li>Wrist band</li><li>Badges</li>"

        document.getElementById("slab-info-para").innerHTML = "A straight-four engine (also called an inline-four) is a four-cylinder piston engine where cylinders are arranged in a line along a common crankshaft. The vast majority of automotive four-cylinder engines use a straight-four layout. (with the exceptions of the flat-four engines produced by Subaru and Porsche) and the layout is also very common in motorcycles and other machinery. "
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 11.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1500&tn=Velocita%20Racing%20Crowdfunding%20I4-INLINE-4"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1500&tn=Velocita%20Racing%20Crowdfunding%20I4-INLINE-4")

        document.getElementById("dis-one").value = "I4 (INLINE 4)"
        document.getElementById("dis-two").value = "1500"
        document.getElementById('worth-details').innerHTML='I4 INLINE 4 worth INR 1,500'
        $("#edit-money").css({'display': 'none'});
        $("#qr-generate").css({'display':'none'});
        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);
        // document.getElementById('myImage').src='./gift-2.gif'
    });

    $(".slab-5").click(function(){
        document.getElementById("slab-name").innerHTML = "V6 Engine"
        document.getElementById("payment-amount").innerHTML = "3,000.00"
        document.getElementById("goodies").innerHTML = " <li>Newsletter Subscription</li><li>Shout out on Website</li><li>Invite to unveil</li><li>Offer on official merchandise</li><li>Wrist band</li><li>Badges</li><li>Diary</li>"

        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("slab-info-name").innerHTML = "V6 Engine"
        document.getElementById("slab-info-para").innerHTML = "A V6 engine is a six-cylinder piston engine where the cylinders share a common crankshaft and are arranged in a V configuration. The V6 layout has become the most common layout for six-cylinder automotive engines."
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 16.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=3000&tn=Velocita%20Racing%20Crowdfunding%20V6-Engine"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=3000&tn=Velocita%20Racing%20Crowdfunding%20V6-Engine")

        document.getElementById("dis-one").value = "V6 ENGINE"
        document.getElementById("dis-two").value = "3000"
        document.getElementById('worth-details').innerHTML='V6 Engine worth INR 3,000'
        $("#edit-money").css({'display': 'none'});
        $("#qr-generate").css({'display':'none'});
        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);
        // document.getElementById('myImage').src='./gift-2.gif'
    });

    $(".slab-6").click(function(){
        document.getElementById("slab-name").innerHTML = "V8 Engine"
        document.getElementById("payment-amount").innerHTML = "5,000.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("slab-info-name").innerHTML = "V8 Engine"
        document.getElementById("goodies").innerHTML = " <li>Newsletter Subscription</li><li>Shout out on Website</li><li>Invite to unveil</li><li>Offer on official merchandise</li><li>Wrist band</li><li>Badges</li><li>Diary</li><li>Name on car</li>"

        document.getElementById("slab-info-para").innerHTML = "A V8 engine is an eight-cylinder piston engine in which the cylinders share a common crankshaft and are arranged in a V configuration. The popularity of V8 engines in cars was greatly increased following the 1932 introduction of the Ford Flathead V8."
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 13.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=5000&tn=Velocita%20Racing%20Crowdfunding%20V8-Engine"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=5000&tn=Velocita%20Racing%20Crowdfunding%20V8-Engine")

        document.getElementById("dis-one").value = "V8 ENGINE"
        document.getElementById("dis-two").value = "5000"
        $("#edit-money").css({'display': 'none'});

        document.getElementById('worth-details').innerHTML='V8 Engine worth INR 5,000'
        $("#qr-generate").css({'display':'none'});
        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);
        // document.getElementById('myImage').src='./gift-2.gif'
    });

    $(".slab-7").click(function(){
        document.getElementById("slab-name").innerHTML = "V12 Engine"
        document.getElementById("payment-amount").innerHTML = "10,000.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("slab-info-name").innerHTML = "V12 Engine"
        document.getElementById("goodies").innerHTML = " <li>Newsletter Subscription</li><li>Shout out on Website</li><li>Invite to unveil</li><li>Offer on official merchandise</li><li>Wrist band</li><li>Badges</li><li>Diary</li><li>Name on car</li><li>Invite to the workshop and track day.</li>"

        document.getElementById("slab-info-para").innerHTML = "A V12 engine is a twelve-cylinder piston engine where two banks of six cylinders are arranged in a V configuration around a common crankshaft. V12 engines are more common than V10 engines. However, they are less common than V8 engines. The first V12 engine was built in 1904 for use in racing boats. "
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 14.png"
        document.getElementById("dis-one").value = "V12 ENGINE"
        document.getElementById("dis-two").value = "10000"
        $("#edit-money").css({'display': 'none'});
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=10000&tn=Velocita%20Racing%20Crowdfunding%20V12-Engine"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1000&tn=Velocita%20Racing%20Crowdfunding%20V12-Engine")


        document.getElementById('worth-details').innerHTML='V12 Engine worth INR 10,000'
        $("#qr-generate").css({'display':'none'});
        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);
        // document.getElementById('myImage').src='./gift-2.gif'
    });

    $(".slab-8").click(function(){
        document.getElementById("slab-name").innerHTML = "ROTARY | OPEN SLAB"
        document.getElementById("payment-amount").innerHTML = "XXXX.XX"
        document.getElementById("slab-info-name").innerHTML = "Rotary Engine"
        document.getElementById("goodies").innerHTML = "Refer Other Slabs"

        document.getElementById("slab-info-para").innerHTML = "The rotary engine is an early type of internal combustion engine, usually designed with an odd number of cylinders per row in a radial configuration, in which the crankshaft remained stationary in operation, with the entire crankcase and its attached cylinders rotating around it as a unit. Its main application was in aviation, although it also saw use before its primary aviation role, in a few early motorcycles and automobiles"
        document.getElementById("slab-info-img").src = "./crowdfundingicons/Asset 9.png"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("dis-one").value = "OPEN SLAB"
        $("#edit-money").css({'display': 'block'});
        document.getElementById("dis-two").value = "100"
        $("#edit-money").click (function() {
          $('#dis-two').prop('disabled', false);
        });

        // var btn = document.createElement("a");   // Create a <button> element
        // btn.innerHTML = "Edit Amount";
        // btn.setAttribute("id", "edit-money");                   // Insert text
        // document.body.appendChild(btn);

        $("#proceed-step-three").click (function() {
          var nameValue = document.getElementById("dis-two").value;
          var amtValue = document.getElementById("dis-one").value;
          document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am="+ nameValue + "&tn=Velocita%20Racing%20Crowdfunding%20Slab" + amtValue
          $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=" + nameValue + "&tn=Velocita%20Racing%20Crowdfunding%20Slab" + amtValue);
        });

       
        
        

        
        document.getElementById('worth-details').innerHTML='Open Slab. You can edit amount details on checkout'
        $("#qr-generate").css({'display':'none'});
        

            setTimeout(function(){
              $("#pay-load").css({'display':'block'});
              
            }, 0);

            setTimeout(function(){
              $("#pay-load").css({'display':'none'});
              
            }, 2800);

            setTimeout(function(){
              $("#qr-generate").css({'display':'block'});
            }, 2800);
        // document.getElementById('myImage').src='./gift-2.gif'
    });


