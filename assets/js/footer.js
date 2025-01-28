
var scrollBottom = $(window).scrollTop() + $(window).height();
$(window).scroll(function(){
      if($(this).scrollTop() > 400) {
        $('.button').css({'display': 'none'});
       } else if (scrollBottom  > 200) {
        $('.button').css({'display': 'block'});
      }
    });
$(document).ready(function() {
    $('img').lazyload();
});
$(document).ready(function() {
    $(".btn2").click(function() {
        $(".grid-item.filter2").removeClass('d-none');
    });

    $(".btn3").click(function() {
        $(".grid-item.filter3").removeClass("d-none");
    });
    $(".btn4").click(function() {
        $(".grid-item.filter4").removeClass("d-none");
    });
});

    $(document).ready(function() {
        $(".btn2").click(function() {
            $(".grid-item.filter2").removeClass('d-none');
        });

        $(".btn3").click(function() {
            $(".grid-item.filter3").removeClass("d-none");
        });
    });

$(document).ready(function() {
    $('.image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});

    function printDiv() {
        var divContents = document.getElementById("wholePagePrint").innerHTML;
        var a = window.open('', '', 'height=600, width=600');
        a.document.write('<html>');
        a.document.write('<body>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    }
  

    $(document).ready(function() {
        $('.example').DataTable( {
            dom: 'Bfrtip',
            buttons: [
                {              
                    extend: 'print',
                        title: function() {
                            return "<div style='font-size: 25px;'>National Rabies Control Program</div>";
                           ;
                        }                    
                       
               }
            ]
        } );
    });


    $(document).ready(function() {
        
        const searchParams = new URLSearchParams(window.location.search);    
        const vDate = new Date(searchParams.get('date'));
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output = d.getFullYear() + '-' +((''+month).length<2 ? '0' : '') + month + '-' +((''+day).length<2 ? '0' : '') + day;
        var dDate = new Date(searchParams.get('v-date') !=null ?searchParams.get('v-date'):output); 
        let vMonth = vDate.getMonth();
        let bDate = vDate.getDate();
        let vYear = vDate.getFullYear();
        let dMonth = dDate.getMonth();
        let dbDate = dDate.getDate();
        let dYear = dDate.getFullYear();   
        $('.example1').DataTable( {
            dom: 'Bfrtip',
            buttons: [
                {              
                    extend: 'print',
                        title: function() {
                            return "<div style='display:flex;justify-content: space-between;align-items: center;'> <div style='font-size: 25px;margin-bottom:20px;'>Vaccination Schedule</div> <div> <div style='font-size: 18px;margin-bottom:5px;'> Date of Animal Bites : "+`${bDate +"-" + (Number(vMonth) + 1)  + "-" + vYear}`+" </div> <div style='font-size: 18px;margin-bottom:20px;'> Date of 1st Dose of vaccination (day0): "+`${dbDate +"-" + (Number(dMonth) + 1)  + "-" + dYear}`+" </div> </div> <ul style='display:block;position: absolute; bottom :73%'><li style='font-size: 16px;font-weight:400; margin-bottom:10px;'>1- Site of vaccine injection: Adult/Children : Deltoid muscle (IM/ID) Infant and Children : Anterolateral thigh(IM) </li> <li style='font-size: 16px;font-weight:400;margin-bottom:10px;'>2- All category III bites wounds must be infiltrated with Rabies immunoglobulin.</li>  <li style='font-size: 16px;font-weight:400'>3- If you have never been vaccinated for Rabies, this is the schedule you need to follow.</li></ul> <div style='position: absolute; top:95%;font-size:14px'><i>[Disclaimer:- The above information is for reference only, not for any medico-legal purpose. Please seek advice with the doctor for the same.]</i></div> ";
                        }                          
               }
            ]
        } );
    });
    
    function changeURL(e) {
        var temp = new Array();
        var temp = e.split(',');
        document.location.href = "vaccination_dose?type=" + temp[0] + '&' + 'date=' + temp[1]+'&'+'animal_bite=' + temp[2]+'&'+'v-date=' + temp[3];
    }
    $(document).ready(function() {
        $(".btn2").click(function() {
            $(".grid-item.filter2").removeClass('d-none');
        });
        $(".btn3").click(function() {
            $(".grid-item.filter3").removeClass("d-none");
        });
    });

function cehckradio(){
    var dat = $('input[type="radio"][name="animal_bite"]:checked').val();
    if(dat == undefined){
        $("#radio_error").html("Please select Yes/No")
    }
        return true;
    }
$(function()
    {
      $('#myform').validate(
        {
          rules:
          {
            animal_bite:{ required:true }
          },
          messages:
          {
            animal_bite:
            {
              required:"Please select<br/>"
            }
          },
          errorPlacement: function(error, element) 
          {
              if ( element.is(":radio") ) 
              {
                  error.appendTo( element.parents('.container') );
              }
              else 
              { // This is the default behavior 
                  error.insertAfter( element );
              }
           }
        });
      
    });

    $(document).ready(function() {
        $('.image-link').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });
    
function getDistrictList(){
    var statename = $('#stateC').val();
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: "get-districts-list",
        type: "POST",
        data:{
            'state_name' : statename // in header request I'm getting value [productName: plastic product] *
            },
        success:function(data){
            document.querySelector('#citiesC').innerHTML = data;
            $select.selectmenu("refresh", true);
        },
        error:function(e){
            alert("Some error occured. Please try again later.");
        }
    });
}

function getDistrictListH(){
    var statename = $('#stateH').val();
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: "get-districts-list-human",
        type: "POST",
        data:{
            'state_name' : statename // in header request I'm getting value [productName: plastic product] *
            },
        success:function(data){
            document.querySelector('#citiesH').innerHTML = data;
            $select.selectmenu("refresh", true);
        },
        error:function(e){
            alert("Some error occured. Please try again later.");
        }
    });
}

function getDistrictListA(){
    var statename = $('#stateA').val();
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: "get-districts-list-animal",
        type: "POST",
        data:{
            'state_name' : statename // in header request I'm getting value [productName: plastic product] *
            },
        success:function(data){
            document.querySelector('#citiesA').innerHTML = data;
            $select.selectmenu("refresh", true);
        },
        error:function(e){
            alert("Some error occured. Please try again later.");
        }
    });
}


//Search code starts
// function getSearchResults(){
//     var statename = $('#stateC').val();
//     var districtname = $('#citiesC').val();
//     $.ajax({
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         },
//         url: "get-vaccination-center",
//         type: "POST",
//         data:{
//             'state_name' : statename,
//             'city_name' : districtname // in header request I'm getting value [productName: plastic product] *
//             },
//         success:function(data){
//             document.querySelector('#search-data').innerHTML = data
//         },
//         error:function(e){
//             alert("Some error occured. Please try again later.");
//         }
//     });
// }


function getSearchResultsH(){
    var statename = $('#stateH').val();
    var districtname = $('#citiesH').val();
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: "get-vaccination-center-H",
        type: "POST",
        data:{
            'state_name' : statename,
            'city_name' : districtname // in header request I'm getting value [productName: plastic product] *
            },
        success:function(data){
            document.querySelector('#search-data-H').innerHTML = data
        },
        error:function(e){
            alert("Some error occured. Please try again later.");
        }
    });
}

// function getSearchResultsAs(){
//     var statename = $('#stateA').val();
//     var districtname = $('#citiesA').val();
//     $.ajax({
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         },
//         url: "get-vaccination-center-A",
//         type: "POST",
//         data:{
//             'state_name' : statename,
//             'city_name' : districtname // in header request I'm getting value [productName: plastic product] *
//             },
//         success:function(data){
//             document.querySelector('#search-data-A').innerHTML = data
//         },
//         error:function(e){
//             alert("Some error occured. Please try again later.");
//         }
//     });
// }



$(".nav-link").click(function(){
$(".row.grid.nearest-vaccication").addClass('nearest-vaccication1');

});

$("#on-the-map").click(function(){
$(".row.grid.nearest-vaccication").removeClass('nearest-vaccication1');

});

$("#on-the-map").click(function(){
//console.log("this is tab");
    $(".col-lg-12.col-md-12.grid-item.filter4.d-none").css("display", "block");
});

function checkYesNo(e){
    var html = '';
    if(e=='1'){
        $("#txtDate").removeAttr('required', 'true'); 
        html =`<label class="pl-2">Date of 1st Dose of vaccination (day 0)</label>`;
        html +=`<input class="from-control mt-2 mb-4" type="date" name="v-date" placeholder="Name" id="txtDate1" required>`;
$(function(){
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    $('#txtDate1').attr('max', maxDate);
});
    }else{
        $("#txtDate").attr('required', 'true'); 
        html +=``;
    }
    $('#yesINput').html(html);
}

  $(function(){
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    $('#txtDate').attr('max', maxDate);
    $('#txtDate1').attr('max', maxDate);
});

function ctime(){
    if (!document.getElementById)
    return
    timeElement=document.getElementById("timeid")
    var curdate=new Date()
    var hours=curdate.getHours()
    var minutes=curdate.getMinutes()
    var seconds=curdate.getSeconds()
    var DayNight="PM"
    if (hours<12) DayNight="AM";
    if (hours>12) hours=hours-12;
    if (hours==0) hours=12;
    if (minutes<=9) minutes="0"+minutes;
    if (seconds<=9) seconds="0"+seconds;
    var ctime=hours+":"+minutes+":"+seconds+" "+DayNight;
    timeElement.innerHTML="<p class='time'>"+ctime+"</p>"
    setTimeout("ctime()",1000)
    }
    window.onload=ctime

    $("document").ready(function(){
        setTimeout(function(){
           $("div.alert").remove();
        }, 5000 ); // 5 secs
    
    });
    // disable alphate
    $('.phone').keypress(function(e) {
       // alert('hii');
        var regex = new RegExp("^[0-9_]");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    });

$(document).ready(function(){ 
    $(".BDC_CaptchaImageDiv a").remove(); 
 
});


// Event details page js

let slideIndex = 1;
showSlides(slideIndex);        
function plusSlides(n) {
  showSlides(slideIndex += n);
}        
function currentSlide(n) {
  showSlides(slideIndex = n);
}        
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



