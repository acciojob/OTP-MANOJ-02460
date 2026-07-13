//your JS code here. If required.

let inputs = document.querySelectorAll(".code-container .code");

if(inputs.length>0){
	inputs[0].focus();
}

inputs.forEach((input,index)=>{

	input.addEventListener("input",(e)=>{
		const value = e.target.value;

		if(value.length>1){
			e.target.value = value.charAt(0);
		}

		if(value !== "" && index<inputs.length-1){
			inputs[index+1].focus();
		}
	});

	input.addEventListener("keydown",(e)=>{
		if(e.key === "Backspace"){

			if(input.value === "" && index>0){
				inputs[index-1].focus();
				inputs[index-1].value="";
				e.preventDefault();
			}else{
				input.value=""
			}
		}
	})

	
});
