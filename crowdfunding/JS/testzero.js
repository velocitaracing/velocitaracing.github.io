$("#close-process").click(function(){

    // document.getElementById("text").value = ''
    $(".slabs").removeClass("slab-active");
    // $(".slabs i").removeClass("arrow-active");
    $(".slab-1").click()
    
      
      $('.slab-1').addClass("slab-active");
    //   $('.slab-1').find("i").addClass("arrow-active");

    
});
      
      
    $(".slab-1").click(function(){
        document.getElementById("slab-name").innerHTML = "1C ENGINE"
        document.getElementById("payment-amount").innerHTML = "100.00"
        // document.getElementById("qr-generate").src = "./QRS/QR.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=100&tn=Velocita%20Racing%20Crowdfunding%201CENGINE";
        document.getElementById("dis-one").value = "1C ENGINE"
        document.getElementById("dis-two").value = "100"
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

        document.getElementById('worth-details').innerHTML='1C engine worth INR 100'
    });

    $(".slab-2").click(function(){
        document.getElementById("slab-name").innerHTML = "V2 (V-TWIN)"
        document.getElementById("payment-amount").innerHTML = "500.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=500&tn=Velocita%20Racing%20Crowdfunding%20V2V-TWIN"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=500&tn=Velocita%20Racing%20Crowdfunding%20V2V-TWIN")

        document.getElementById("dis-two").value = "500"
        document.getElementById("dis-one").value = "V2 V-TWIN"
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
        document.getElementById("slab-name").innerHTML = "I4 (INLINE 4)"
        document.getElementById("payment-amount").innerHTML = "1,000.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1000&tn=Velocita%20Racing%20Crowdfunding%20I4-INLINE-4"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1000&tn=Velocita%20Racing%20Crowdfunding%20I4-INLINE-4")

        document.getElementById("dis-one").value = "I4 INLINE 4"
        document.getElementById("dis-two").value = "1000"
        document.getElementById('worth-details').innerHTML='I4 INLINE 4 worth INR 1,000'
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
        document.getElementById("slab-name").innerHTML = "V6 engine"
        document.getElementById("payment-amount").innerHTML = "1,500.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1500&tn=Velocita%20Racing%20Crowdfunding%20V6Engine"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1500&tn=Velocita%20Racing%20Crowdfunding%20V6Engine")

        document.getElementById("dis-one").value = "V6 ENGINE"
        document.getElementById("dis-two").value = "1500"
        document.getElementById('worth-details').innerHTML='V6 Engine worth INR 1,500'
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
        document.getElementById("slab-name").innerHTML = "V8 Engine"
        document.getElementById("payment-amount").innerHTML = "3,000.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=3000&tn=Velocita%20Racing%20Crowdfunding%20V8Engine"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=3000&tn=Velocita%20Racing%20Crowdfunding%20V8Engine")

        document.getElementById("dis-one").value = "V8 ENGINE"
        document.getElementById("dis-two").value = "3000"
        document.getElementById('worth-details').innerHTML='V8 Engine worth INR 3,000'
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
        document.getElementById("slab-name").innerHTML = "V10 Engine"
        document.getElementById("payment-amount").innerHTML = "5,000.00"
        // document.getElementById("qr-generate").src = "./QRS/QR100.png"
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=5000&tn=Velocita%20Racing%20Crowdfunding%20V10Engine"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=5000&tn=Velocita%20Racing%20Crowdfunding%20V10Engine")

        document.getElementById("dis-one").value = "V10 ENGINE"
        document.getElementById("dis-two").value = "5000"
        $("#edit-money").css({'display': 'none'});

        document.getElementById('worth-details').innerHTML='V10 Engine worth INR 5,000'
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
        document.getElementById("dis-one").value = "V12 ENGINE"
        document.getElementById("dis-two").value = "10000"
        $("#edit-money").css({'display': 'none'});
        document.getElementById("text").value = "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=10000&tn=Velocita%20Racing%20Crowdfunding%20V12Engine"
        $("#mobile-upi").attr("href", "upi://pay?cu=INR&pa=satvikcrvk718-1@oksbi&pn=Satvik%20S.&am=1000&tn=Velocita%20Racing%20Crowdfunding%20V12Engine")


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
        document.getElementById("slab-name").innerHTML = "OPEN SLAB"
        document.getElementById("payment-amount").innerHTML = "XXXX.XX"
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


