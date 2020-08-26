var initial = document.querySelector("#initial");
var searchInput = document.querySelector("#search-input");
var searchLastInput = document.querySelector("#search-last-input")
var sliceInput1 = document.querySelector("#slice-input1");
var sliceInput2 = document.querySelector("#slice-input2");
var replaceInput1 = document.querySelector("#replace-input1");
var replaceInput2 = document.querySelector("#replace-input2");
var wrap = document.querySelector(".wrap");
var result = document.querySelector("#final")
var tag, search, find, splice,len;
var searchListBtn = document.querySelector(".item-search-submit-btn");
var input = document.getElementById('myInput');
input.addEventListener("keydown", myFunction)
wrap.addEventListener("click", initialized);


function myFunction() {
  // Declare variables
  var filter, ul, li, a, i, txtValue; 
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    txtValue = txtValue.trim();
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}




function initialized(e){
	item = e.target;
	if(item.classList[0] === "initial-submit-btn"){
	tag = initial.value;
	alert("mesajul a fost memorat ! Editeza-l");
	};
	if (item.classList[0] === "search-submit-btn") {
			find = tag.search(searchInput.value);
			result.value = find+1;	
	};
	if (item.classList[0] === "searchLast-submit-btn") {
			find = tag.lastIndexOf(searchLastInput.value);
			result.value = find+1;	
	};
	if (item.classList[0] === "slice-submit-btn") {
			var firstValSlice, scnValSlice;
			firstValSlice = sliceInput1.value;
			scnValSlice = sliceInput2.value;
			splice = tag.slice(firstValSlice, scnValSlice);
			result.value = splice;
	};
	if (item.classList[0] === "replace-submit-btn") {
			var firstValRep, scnValRep;
			firstValRep = replaceInput1.value;
			scnValRep = replaceInput2.value;
			splice = tag.replace(firstValRep, scnValRep);
			result.value = splice;
	};
	if (item.classList[0] === "length-submit-btn") {
			len = tag.length;
			for(var i=1; i<=tag.length;i++){
				if(tag[i] === " ")
					len = len - 1;
			}
			result.value = len;
	};



	window.onclick = function(event){
		if (event.target.classList[1] === "op-btn"){
			if(result.value === "0" || result.value === "" ){
				result.value = "nu exista";
				result.classList.add("error-initial");
			}
			else
			result.classList.add("activate-initial");

			var scrollToTop = window.setInterval(function() {
			    var pos = window.pageYOffset;
			    if ( pos > 0 ) {
			        window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
			    } else {
			        window.clearInterval( scrollToTop );
			    }
			}, 7); // how fast to scroll (this equals roughly 60 fp

		}

			if(event.target.classList[1] === "op" || event.target.classList[0] === "length"){
				result.classList.remove("activate-initial");
				result.classList.remove("error-initial");
				result.value = "";
			};
	};
};


