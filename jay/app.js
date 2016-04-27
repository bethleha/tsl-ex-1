			loginSecE = document.getElementById("loginSec");
			empListSecE = document.getElementById("empListSec");
			empInfoSecE = document.getElementById("empInfoSec");
		var employeeList=[
			{
				id:1,
				name:"Jayanth",
				salary:"20k",
				designation:"Developer",
				address:"Banglore",
				mobile:"9731610834"
				
			},			
			{
				id:2,
				name:"Sowmya",
				salary:"20k",
				designation:"Developer",
				address:"Warangal",
				mobile:"987654321"
			},			
			{
				id:3,
				name:"Srikanth",
				salary:"20k",
				designation:"Developer",
				address:"Prudutur",
				mobile:"234567890"
			},
			{
				id:4,
				name:"Ravindra",
				salary:"20k",
				designation:"Developer",
				address:"Pulivendula",
				mobile:"6637278292"
			},
			{
				id:5,
				name:"Shruthika",
				salary:"20k",
				designation:"Developer",
				address:"Nizamabad",
				mobile:"5555666677"
			},
			{
				id:6,
				name:"Surya",
				salary:"20k",
				designation:"Developer",
				address:"Hyderbad",
				mobile:"123456789"
			},
			{
				id:7,
				name:"Manmohan",
				salary:"20k",
				designation:"Developer",
				address:"karim nagar",
				mobile:"8888888888"
			}
	];
	function prepareEmpInfo()
			{
			
			var id=location.hash.split("/")[2];
			var foundEmployee = employeeList.find(function(oEmployee)
			{
				return(oEmployee.id == id)
			});

			
			var rowE=document.createElement("tr");
			var idE = document.createElement("td");
			idE.innerHTML=""+foundEmployee.id;

			var nameE = document.createElement("td");
			nameE.innerHTML=foundEmployee.name;	

			var salaryE = document.createElement("td");
			salaryE.innerHTML=foundEmployee.salary;	

			var designationE = document.createElement("td");
			designationE.innerHTML=foundEmployee.designation;
		
			var addressE = document.createElement("td");
			addressE.innerHTML=foundEmployee.address;

			var mobileE = document.createElement("td");
			mobileE.innerHTML=foundEmployee.mobile;

			var rowE=document.createElement("tr");
			rowE.appendChild(idE);
			rowE.appendChild(nameE);
			rowE.appendChild(salaryE);
			rowE.appendChild(designationE);
			rowE.appendChild(addressE);
			rowE.appendChild(mobileE);	

			var tableE=document.getElementById("empinfo");
			tableE.appendChild(rowE);
			if(tableE.children >1)
			{
				tableE.removeChild(tableE.children[1]);
			}

		}
		
	function prepareEmpList()
	{
		var tableE = document.createElement("table");
		tableE.align = "center";
		employeeList.forEach (function(oEmployee) 
		{
			rowE = document.createElement("tr");
			idE = document.createElement("td");
			idE.innerHTML = oEmployee.id;

			nameE = document.createElement("td");
			nameAnchorE=document.createElement("a");
			nameAnchorE.innerHTML=oEmployee.name;
			nameAnchorE.href="#/empinfo/"+oEmployee.id;
			nameAnchorE.onclick="prepareEmpInfo()";
			nameE.appendChild(nameAnchorE);

		
			rowE.appendChild(idE);
			rowE.appendChild(nameE);
			tableE.appendChild(rowE);
		})
		empListSecE.appendChild(tableE);
	}

	function showLoginSec()
	{
		loginSecE.style.display="block";
	}
	function showEmpListSec()
	{
		empListSecE.style.display="block";
	}
	function showEmpInfoSec()
	{
		empInfoSecE.style.display="block";
	}
	function hideLoginSec()
	{
		loginSecE.style.display="none";
	}
	function hideEmpListSec()
	{
		empListSecE.style.display="none";	
	}
	function hideEmpInfoSec()
	{
		empInfoSecE.style.display="none";
	}
	function routerFn()
	{
		if(location.hash == "" || location.hash === "#/loginSec")
		{
			hideEmpListSec();
			hideEmpInfoSec();
			showLoginSec();
			return;
		}
		if(location.hash === "#/empList")
		{
			hideLoginSec();
			hideEmpInfoSec();
			showEmpListSec();
			return;
		}
		if((/empinfo/).test(location.hash))
		{
			hideLoginSec();
			hideEmpListSec();
			showEmpInfoSec();
			prepareEmpInfo();
			return;
		}
	}
	prepareEmpList();
	routerFn();
	window.addEventListener("hashchange", routerFn);
	