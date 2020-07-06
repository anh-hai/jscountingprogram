// var name = prompt("What is your name?")
// alert("Hi " + name)

// var newNum = prompt("Enter a number:")
// alert ("Hi " + name + ", the number you entered was " + newNum)



$("#subName").on("click", function(){
	var newName = $("input[name=newName").val()
	var newNum = $("input[name=newNum]").val()
	$("#dispNum").text("Hi " + newName + ", the number you entered was " + newNum)
	for (i = 0; i <= newNum; i+= 2){
		$("#numbers").append("<p>" + i + "</p>");
	}
})

// $("button#submit").on("click", function(){
// $("h1#greeting").text("You changed me with jQuery.")
// })