$(document).ready(function(){$("#subscribe").on("submit",function(s){s.preventDefault(),$(".subscribe-status").html("");var t={};$("#subscribe-email").val()===""?$(".subscribe-status").html("Please enter an email id"):(t={Email:$("#subscribe-email").val(),Event:"50p 2016"},$(".ajax-loader").css("visibility","visible"),$.ajax({type:"post",url:"https://script.google.com/macros/s/AKfycbwkkVFfdoQF7_aozgUPyfxDuuxOrN2melaehVBcsuP84Fa7Vks/exec",data:t,dataType:"json",timeout:5e3,complete:function(s){$(".ajax-loader").css("visibility","hidden"),s.status===200?($("#subscribe")[0].reset(),$(".subscribe-status").show().html("Thank you for subscribing!")):$(".subscribe-status").show().html("Error, try again.")}}))}),$(".smooth-scroll").click(function(s){s.preventDefault();var t=$(this).attr("href"),e=$(""+t).offset().top-$(".site-navbar").height();$("html,body").animate({scrollTop:e},"900")})});