
function chekform(el){
	//var height = document.getElementById("height").value;
	//var height = el.height.value;
	var breast = el.breast.value;
	var waist = el.waist.value;
	var pelvis = el.pelvis.value;
	var resb = "";
	var resw = "";
	var resp = "";
	var resbu = "";
	var reswu = "";
	var respu = "";
	var resh = "";
	var reshe = "";
	
	if(breast<74)
		resb = "   very small";
	else if(breast<81)
		resb = "  40";
	else if(breast<86)
		resb = "  42";
	else if(breast<90)
		resb = "  44";
	else if(breast<94)
		resb = "  46";
	else if(breast<98)
		resb = "  48";
	else if(breast<102)
		resb = "  50";
	else if(breast<108)
		resb = "  52";
	else if(breast<114)
		resb = "  54";
	else if(breast<120)
		resb = "  56";
	else if(breast<126)
		resb = "  58";
	else if(breast<132)
		resb = "  60";
	else if(breast<138)
		resb = "  62";
	else if(breast<144)
		resb = "  64";
	else if(breast<=151)
		resb = "  66";
	else if(breast>151)
		resb = "  incomprehensible";
	
	if (resb=="  40")
		resbu = "XS";
	else if(resb=="  42")
		resbu = "XS";
	else if(resb=="  44")
		resbu = "S";
	else if(resb=="  46")
		resbu = "M";
	else if(resb=="  48")
		resbu = "M";
	else if(resb=="  50")
		resbu = "L";
	else if(resb=="  52")
		resbu = "XL";
	else if(resb=="  54")
		resbu = "XL";
	else if(resb=="  56")
		resbu = "XXL";
	else if(resb=="  58")
		resbu = "XXXL";
	
	if(waist<60)
		resw = "  very small";
	else if(waist<66)
		resw = "  40";
	else if(waist<70)
		resw = "  42";
	else if(waist<74)
		resw = "  44";
	else if(waist<78)
		resw = "  46";
	else if(waist<82)
		resw = "  48";
	else if(waist<86)
		resw = "  50";
	else if(waist<91)
		resw = "  52";
	else if(waist<96)
		resw = "  54";
	else if(waist<103)
		resw = "  56";
	else if(waist<109)
		resw = "waist 58";
	else if(waist<115)
		resw = "  60";
	else if(waist<122)
		resw = "  62";
	else if(waist<129)
		resw = "  64";
	else if(waist<=135)
		resw = "  68";
	else if(waist>135)
		resw = "  incomprehensible";
	
	if (resw=="  40")
		reswu = "XS";
	else if(resw=="  42")
		reswu = "XS";
	else if(resw=="  44")
		reswu = "S";
	else if(resw=="  46")
		reswu = "M";
	else if(resw=="  48")
		reswu = "M";
	else if(resw=="  50")
		reswu = "L";
	else if(resw=="  52")
		reswu = "XL";
	else if(resw=="  54")
		reswu = "XL";
	else if(resw=="  56")
		reswu = "XXL";
	else if(resw=="  58")
		reswu = "XXXL";
	
	if(pelvis<84)
		resp = "  very small"
	else if(pelvis<92)
		resp = "  40";
	else if(pelvis<96)
		resp = "  42";
	else if(pelvis<99)
		resp = "  44";
	else if(pelvis<102)
		resp = "  46";
	else if(pelvis<105)
		resp = "  48";
	else if(pelvis<109)
		resp = "  50";
	else if(pelvis<113)
		resp = "  52";
	else if(pelvis<117)
		resp = "  54";
	else if(pelvis<122)
		resp = "  56";
	else if(pelvis<127)
		resp = "  58";
	else if(pelvis<133)
		resp = "  60";
	else if(pelvis<139)
		resp = "  62";
	else if(pelvis<145)
		resp = "  64";
	else if(pelvis<=150)
		resp = "  66";
	else if(pelvis>150)
		resp = "  incomprehensible";
	
	if (resp=="  40")
		respu = "XS";
	else if(resp=="  42")
		respu = "XS";
	else if(resp=="  44")
		respu = "S";
	else if(resp=="  46")
		respu = "M";
	else if(resp=="  48")
		respu = "M";
	else if(resp=="  50")
		respu = "L";
	else if(resp=="  52")
		respu = "XL";
	else if(resp=="  54")
		respu = "XL";
	else if(resp=="  56")
		respu = "XXL";
	else if(resp=="  58")
		respu = "XXXL";
	
	
	
	
	
	
//	console.log(resb);
//	console.log(resbu);
//	console.log(resp);
	console.log("respu");
//	console.log(resw);
	document.getElementById('totalb').innerHTML = resb;
	document.getElementById('totalw').innerHTML = resw;
	document.getElementById('totalp').innerHTML = resp;
	
	document.getElementById('totalbu').innerHTML = resbu;
	document.getElementById('totalwu').innerHTML = reswu;
	document.getElementById('totalpu').innerHTML = respu;
	
	return false;
}
function chekformh(el){
	var height = el.height.value;
	var resb = chekform(resb);
	console.log("resb");
	var resw = "";
	var resp = "";
	return ;
}