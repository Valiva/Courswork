function formValidation()
{
	var userFio = document.registration.user_fio;
	var userPhone = document.registration.user_phone;
	var userEmail = document.registration.user_email;
	var petName = document.registration.pet_name;
	var petBreed = document.registration.pet_breed;
	
	var petСolor = document.registration.pet_color;
	var petEyeCol = document.registration.pet_eye_color;
	var petGenM = document.getElementById('genderM');
	var petGenF = document.getElementById('genderF');
	
				
		if(allLetter(userFio))
		{
			if(allnumeric(userPhone))
			{ 
				if(ValidateEmail(userEmail))
				{
					if(allLetterP(petName))
					{
						if(breedSelect(petBreed))
						{
							if(allLetterC(petСolor))
							{
								if(allLetterEC(petEyeCol))
								{
									if (validsex(petGenM,petGenF))
									{

									}
								}
							}

						}
						
					}
				} 
			}
		}
	return false;
} 


function allLetter(userFio)
{ 
	var letters = /^[А-Яа-я]+$/u;
	if(userFio.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('ФИО владельца должно содержать только русские буквы');
		userFio.focus();
		return false;
	}
}


function allnumeric(userPhone)
{ 
	var numbers = /^[0-9]+$/;
	if(userPhone.value.match(numbers))
	{
	return true;
	}
	else
	{
		alert('Номер телефона должен содержать только цифры');
		userPhone.focus();
		return false;
	}
}

function ValidateEmail(userEmail)
{
	var mailformat =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(userEmail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("Введенные данные не являются e-mail");
		userEmail.focus();
		return false;
	}
}

function allLetterP(petName)
{ 
	var letters = /^[А-Яа-я]+$/u;
	if(petName.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Кличка питомца должна содержать только русские буквы');
		petName.focus();
		return false;
	}
}



function breedSelect(petBreed)
{
	if(petBreed.value == "Default")
	{
		alert('Выберите породу из списка предложенных');
		petBreed.focus();
		return false;
	}
		else
		{
		return true;
		}
}



	function allLetterC(petСolor)
{ 
	var letters = /^[А-Яа-я]+$/u;
	if(petСolor.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Введите окрас используя русские символы');
		petСolor.focus();
		return false;
	}
}

function allLetterEC(petEyeCol)
{ 
	var letters = /^[А-Яа-я]+$/u;
	if(petEyeCol.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Введите цвет глаз используя русские символы');
		petEyeCol.focus();
		return false;
	}
}



function validsex(petGenM,petGenF)
	{
		x=0;
		if(petGenM.checked) 
			{
				x++;
			}
			if(petGenF.checked)
			{
				x++; 
			}
				if(x==0)
				{
					alert('Укажите пол питомца');
					petGenF.focus();
					return false;
				}
				
				else
				{
					alert('Вы успешно зарегестрировались');
					window.location.reload()
					return true;
				}
	}

