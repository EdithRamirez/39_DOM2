function validateForm(){
	/* Escribe tú código aquí */
	//antes de agregar los primeros span se deben borrar los viejos

	var span = document.createElement("span");
	span.setAttribute("class","error");
	var spans = document.getElementsByClassName("error");

	while(spans.length>0){
		spans[0].parentNode.removeChild(spans[0]);
	}

	
	var regexLetras = /^[A-Z][a-z]*$/g;
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var regexCorreo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var correo = document.getElementById("input-email");
	var contrasena = document.getElementById("input-password");
	var tipoBici = document.getElementsByTagName("select")[0];
	
	//NOMBRE
	if(nombre.value == null || nombre.value == ""){
		span.innerHTML = "Debes ingresar nombre";
		nombre.parentNode.appendChild(span);
		return false;
	}else if(!regexLetras.test(nombre.value)){
		span.innerHTML = "La primera letra debe ser mayúscula";
		nombre.parentNode.appendChild(span);
		return false;
	}
	//APELLIDO
	if (apellido.value == null || apellido.value == "") {
		span.innerHTML = "Debes ingresar apellido";
		apellido.parentNode.appendChild(span);
		return false;
	}
	else if(!regexLetras.test(apellido.value)){
		span.innerHTML = "La primera letra debe ser mayúscula";
		apellido.parentNode.appendChild(span);
		return false;
	}
	//CORREO
	if (correo.value == null || correo.value == "") {
		span.innerHTML = "Debes ingresar un correo valido";
		correo.parentNode.appendChild(span);
		return false;
	}
	else if (!regexCorreo.test(correo.value)){
		span.innerHTML = "Debes ingresar un correo valido";
		correo.parentNode.appendChild(span);
		return false;
	}
	//CONTRASEÑA
	if (contrasena.value == null || contrasena.value == "") {
		span.innerHTML = "Escribe una contraseña";
		contrasena.parentNode.appendChild(span);
		return false;
	} else if (contrasena.value.length < 6) {
		span.innerHTML = "La contraseña debe tener al menos 6 caracteres";
		contrasena.parentNode.appendChild(span);
		return false;
	} else if (contrasena.value == "password" || contrasena.value == "123456" || contrasena == "098754"){
		span.innerHTML = "No se puede utilizar esa contraseña";
		contrasena.parentNode.appendChild(span);
		return false;
	}
	//BICI
	if( tipoBici.selectedIndex == null || tipoBici.selectedIndex == 0 ) {
		span.innerHTML = "Debe seleccionar una opción de la lista";
		tipoBici.parentNode.appendChild(span);
		return false;
	}
}