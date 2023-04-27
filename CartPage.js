
const product =[
{
	image: 'img/NoBg/CBN-1.png',
	title: ' VIVID BLOOM ',
	price: 35

},
{
	image: 'img/NoBg/CBN-2.png',
	title: ' ROASTERS PICK ',
	price: 40

},
{
	image: 'img/NoBg/CBN-3.png',
	title: ' HAIR BENDER ',
	price: 45

},
{
	image: 'img/NoBg/CBN-4.png',
	title: ' HOLLER MOUNTAIN ',
	price: 50

},
{
	image: 'img/NoBg/CBN-5.png',
	title: ' ETHIOPIA MORDECOFE ',
	price: 55

},
{
	image: 'img/NoBg/CBN-6.png',
	title: ' INDONISIA BIES PENANTAN ',
	price: 60

},
{
	image: 'img/NoBg/CBN-7.png',
	title: ' RAWANDA HUYE MOUNTAIN ',
	price: 70

},
{
	image: 'img/NoBg/CBN-8.png',
	title: ' BLEND TRIO ',
	price: 90

},
	]

const categories = [...new Set(product.map((item)=>
		{return item}))];

function delElement(a){
	categories.splice(a, 1);
	displaycart();
}

function promo(){
	let promocode=document.getElementById('promocode').value;
	if(promocode==1234){
		displaycart(50);
	}
	else(
		prompt("Enter A Correct Promo Code")
		)
}


function displaycart(c){
	let j=0, total=0;
	document.getElementById("itemA").innerHTML = categories.length + " Items";
	document.getElementById("itemB").innerHTML = categories.length + " Items";
	if(categories.length==0){
		document.getElementById("root").innerHTML="Your Cart is Empty";

		document.getElementById("totalA").innerHTML = "$ 00.00";
		document.getElementById("totalB").innerHTML = "$ 00.00";
	}
	else{
		document.getElementById("root").innerHTML = categories.map((items)=>{
			let{image, title, price}=items;
			total = total+price;
			document.getElementById("totalA").innerHTML = "$ "+ total +".00";

			if(c==50){
				document.getElementById("totalB").innerHTML = "$ "+(total-c)+".00";
			}
			else{
				document.getElementById("totalB").innerHTML = "$ "+total+ ".00";
			}





			return(
			 `<tr>	
			 	<td width="150" ><div class="img-box"><img class="img" src=${image}></div></td>
			 	<td width="360"><p style='font-size:15px; text-align:center;'>${title}</p></td>
			 	<td width="150"><h2 style='font-size:15px; color:red; text-align:center;'>$ ${price}.00</h2></td>
			 	<td width="70" >`+"<i style='left:1.7em;'class='fa-regular fa-trash-can' onclick='delElement("+ (j++) +")'></i></td>"+
			 `</tr>`
			);
		}).join('');
	}
}
displaycart();
 





































