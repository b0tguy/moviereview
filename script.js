function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

/* pash kete ngoogle per ate rating me stars, po qe se gjeni gj tjtr m tmir bejm ate
document.addEventListener('DOMContentLoaded', function(){
    (function(){
        let sr = document.querySelectorAll('.my-star');
        let i = 0;
        
        while (i < sr.length){

            sr[i].addEventListener('click', function(){

                let cs = parseInt(this.getAttribute("data-star"));

                document.querySelector('#output').value = cs;

                let pre = cs;

                while(1 <= pre){
                    //check if the classlist contains the active class, if not, add the class
                    if(!document.querySelector('.star-'+pre).classList.contains('is-active')){
                        document.querySelector('.star-'+pre).classList.add('is-active');
                    }
                   
                    --pre;
                }


                let succ = cs+1;
                while(5 >= succ){
                    //check if the classlist contains the active class, if yes, remove the class
                    if(document.querySelector('.star-'+succ).classList.contains('is-active')){
                        document.querySelector('.star-'+succ).classList.remove('is-active');
                    }
                    
                    ++succ;
                }

            })
            i++;
        }
    })();
})*/
