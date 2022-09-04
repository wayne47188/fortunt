function drawit(pt){
    var lucky_num = 1;
     lucky_num = Math.floor(Math.random()*60+1); 			 
    $("#luckyid").text(lucky_num.toString());	
    $("#luckyid_1").delay(4000).fadeIn(500).text(lucky_num.toString());
    $("#content_0").css("display","none");	
    if (pt=='0'){//pull voice
            $("#sharkit").fadeIn(500).css("display","block");	
            window.setTimeout("sharkit()", 2100);									
    }else{
        sharkit();		
    }	

}
function sharkit(){
        $("#sharkit").css("display","none");	
        $("#content_1").fadeIn(1000).css("display","block");	
        $("#cyc_draw img").attr("src", "./data/a_act_draw.gif");			
        $("#content_2").css("display","none");		
        $("#draw").css("display","none");	
        $("#slot").show();				
        $("#gogetit").css("display","none");									
}
function gotit(){
    location.href="index.html?ans="+$("#luckyid").html();
}
function slotit(){			
    var slot_num = 1;
            $("#content_2").fadeIn(800).css("display","block");	
            $("#content_1").css("display","none");					
     slot_num = Math.floor(Math.random()*4); 	
     if (slot_num==0){
         jQuery("#slotresult").attr("src", "./data/no.png")
         $("#draw_again").show();		 
         $("#slot").css("display","none");		 
         $("#gogetit").css("display","none");				 
         $("#result_title").text("陰筊");		
         $("#result_txt").text("求籤失敗，請重新求籤");		
         
     }else if(slot_num>2){
         jQuery("#slotresult").attr("src", "./data/even.png")		
         $("#draw_again").show();		 
         $("#slot").css("display","none");		 
         $("#gogetit").css("display","none");			 
         $("#result_title").text("笑筊");		
         $("#result_txt").text("求籤失敗，請重新求籤");		
         
     }else{
         jQuery("#slotresult").attr("src", ".data/yes.png")
         $("#result_title").text("聖筊");		
         $("#result_txt").text("求籤成功，請領取籤詩");		
         $("#draw_again").css("display","none");		 
         $("#slot").css("display","none");		 
         $("#gogetit").show();		 			 			 
     }					
}