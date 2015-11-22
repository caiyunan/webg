/**
 * Created by CYA on 2015/10/30.
 */
window.onload =function(){
    var pic=document.getElementById("rightcomment");

    var iconbtn=document.getElementById("closeBtn");
    iconbtn.onclick= function () {
        //alert("sdafdfd")
        //pic.style.display='none';
        ////iconbtn.style.display='none';
        ////iconbtn.remove();
        //pic.remove();
        pic.className='hide';
    }
}
