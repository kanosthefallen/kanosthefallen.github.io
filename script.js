var typeDropdown;
var characteristicDropdown;
var xfileDropdown;
var xlist;
var newGameBtn;
var guessBtn;
var eliminateBtn;
var confirmButton;
var selectBoxes;
var xfile;
var selectedGuess;


  
//Window On load
window.onload = function() { 
  newGameBtn = document.getElementById("new-game");
  guessBtn = document.getElementById("guess");
  eliminateBtn = document.getElementById("eliminate");
  confirmButton = document.getElementById('confirm');
  selectBoxes = document.querySelectorAll('select');
  characteristicDropdown = document.getElementById('characteristic');
  typeDropdown = document.getElementById('type');
  xfileDropdown = document.getElementById('x-files-select');
    
  loadData();
  setCharacteristicOptions();
  setTypeOptions();
  dataUpdate(); 
  
  //Listeners
}
  
//Window On Unload
  window.onbeforeunload = function() {
  sessionStorage.setItem('xlist', JSON.stringify(xlist));
}

//Load Existing Data
function loadData(){
	try{
		if (JSON.parse(sessionStorage.getItem('xlist'))!== null){
	xlist = JSON.parse(sessionStorage.getItem('xlist'));
  }
	} catch (e) {
		console.error("Error parsing JSON data: " + e);
  	xlist = createDataSet();
  }
}

//Popup for Guessing
function displayCharacteristics() {
  // Get the selected X-File from the dropdown menu
  selectedGuess = document.getElementById("x-files-select").value;alert(selectedGuess);
  xlist.forEach(option => {
    if(option.Name == selectedGuess){
		xfile = option;
	}
  });
  
  // Create a message that lists the type of each characteristic
  var message = "Name: " + xfile.Name + "\n";
  message += "Affiliation: " + xfile.Affiliation + "\n";
   message += "Motive: " + xfile.Motive + "\n";
    message += "Method: " + xfile.Method + "\n";
	 message += "Result: " + xfile.Result + "\n";
  
  // Ask the user if they're sure they want to make a guess
  var confirmed = window.confirm(message + "\nAre you sure you want to make a guess?");
  
  // If the user clicks "OK", make a guess
  if (confirmed) {
    //makeGuess();
  }
}

//Function to create the deafult data Set
function createDataSet() {
  var dataSet = [
    { 
      Name: "Alien Abductors", 
      Affiliation: "Alien", 
      Motive: "Knowledge", 
      Method: "Subterfuge", 
      Result: "Abduction"
    },
    {
	Name: "Arctic Worm",
	Affiliation: "Alien",
	Motive: "Survival",
	Method: "Possession",
	Result: "Insanity"
	},
	{
	Name: "Brother Martin",
	Affiliation: "Alien",
	Motive: "Knowledge",
	Method: "Violence",
	Result: "Death"
	},
	{
	Name: "Alien Conservationist",
	Affiliation: "Alien",
	Motive: "Ideology",
	Method: "Subterfuge",
	Result: "Abduction"
	},
	{
	Name: "Ded Kalm",
	Affiliation: "Alien",
	Motive: "Control",
	Method: "Manipulation",
	Result: "Physiological"
	},
	{
	Name: "The Gregors",
	Affiliation: "Alien",
	Motive: "Security",
	Method: "Manipulation",
	Result: "Manipulation"
	},
	{
	Name: "Alien Listeners",
	Affiliation: "Alien",
	Motive: "Ideology",
	Method: "Subterfuge",
	Result: "Manipulation"
	},
	{
	Name: "Alien Experimenters",
	Affiliation: "Alien",
	Motive: "Survival",
	Method: "Possession",
	Result: "Death"
	},
	{
	Name: "John Barnett",
	Affiliation: "Government",
	Motive: "Control",
	Method: "Violence",
	Result: "Death"
	},
	{
	Name: "Reverse Engineers",
	Affiliation: "Government",
	Motive: "Security",
	Method: "Threats",
	Result: "Insanity"
	},
	{
	Name: "Cmdr. Colin Henderson",
	Affiliation: "Government",
	Motive: "Security",
	Method: "Subterfuge",
	Result: "Manipulation"
	},
	{
	Name: "Ed Funsch, Postal Worker",
	Affiliation: "Government",
	Motive: "Control",
	Method: "Possession",
	Result: "Insanity"
	},
	{
	Name: "Duane Barry",
	Affiliation: "Government",
	Motive: "Survival",
	Method: "Violence",
	Result: "Abduction"
	},
	{
	Name: "Faciphaga Emasculata",
	Affiliation: "Government",
	Motive: "Knowledge",
	Method: "Manipulation",
	Result: "Physiological"
	},
	{
	Name: "The Cigarette-Smoking Man",
	Affiliation: "Government",
	Motive: "Ideology",
	Method: "Threats",
	Result: "Manipulation"
	},
	{
	Name: "Alien DNA Steroid Prog.",
	Affiliation: "Government",
	Motive: "Knowledge",
	Method: "Subterfuge",
	Result: "Physiological"
	},
	{
	Name: "Eugene Victor Tooms",
	Affiliation: "Evolutionary",
	Motive: "Survival",
	Method: "Subterfuge",
	Result: "Death"
	},
	{
	Name: "Central Operating Sys./AI",
	Affiliation: "Evolutionary",
	Motive: "Security",
	Method: "Violence",
	Result: "Manipulation"
	},
	{
	Name: "Eve",
	Affiliation: "Evolutionary",
	Motive: "Knowledge",
	Method: "Violence",
	Result: "Abduction"
	},
	{
	Name: "Arthur Grable",
	Affiliation: "Evolutionary",
	Motive: "Knowledge",
	Method: "Possession",
	Result: "Death"
	},
	{
	Name: "The Host",
	Affiliation: "Evolutionary",
	Motive: "Survival",
	Method: "Violence",
	Result: "Physiological"
	},
	{
	Name: "Augustus Cole",
	Affiliation: "Evolutionary",
	Motive: "Control",
	Method: "Manipulation",
	Result: "Death"
	},
	{
	Name: "Dr. Banton and His Shadow",
	Affiliation: "Evolutionary",
	Motive: "Ideology",
	Method: "Threats",
	Result: "Manipulation"
	},
	{
	Name: "Leonard",
	Affiliation: "Evolutionary",
	Motive: "Control",
	Method: "Violence",
	Result: "Death"
	},
	{
	Name: "Cecil L'ively",
	Affiliation: "Evolutionary",
	Motive: "Control",
	Method: "Threats",
	Result: "Death"
	},
	{
	Name: "B.J. Morrow",
	Affiliation: "Primordial",
	Motive: "Control",
	Method: "Possession",
	Result: "Insanity"
	},
	{
	Name: "The Jersey Devil",
	Affiliation: "Primordial",
	Motive: "Security",
	Method: "Violence",
	Result: "Death"
	},
	{
	Name: "The Swarm",
	Affiliation: "Primordial",
	Motive: "Control",
	Method: "Violence",
	Result: "Abduction"
	},
	{
	Name: "Volcanic Spore",
	Affiliation: "Primordial",
	Motive: "Survival",
	Method: "Manipulation",
	Result: "Physiological"
	},
	{
	Name: "Lucas Henry, Serial Killer",
	Affiliation: "Primordial",
	Motive: "Control",
	Method: "Violence",
	Result: "Abduction"
	},
	{
	Name: "Leonard Vance",
	Affiliation: "Primordial",
	Motive: "Knowledge",
	Method: "Manipulation",
	Result: "Physiological"
	},
	{
	Name: "Donnie Pfaster",
	Affiliation: "Primordial",
	Motive: "Ideology",
	Method: "Subterfuge",
	Result: "Death"
	},
	{
	Name: "Sheriff Tom Arens, Cannibal",
	Affiliation: "Primordial",
	Motive: "Ideology",
	Method: "Subterfuge",
	Result: "Insanity"
	},
	{
	Name: "Warren James Dupre",
	Affiliation: "Occult",
	Motive: "Survival",
	Method: "Possession",
	Result: "Abduction"
	},
	{
	Name: "The Manitou",
	Affiliation: "Occult",
	Motive: "Control",
	Method: "Violence",
	Result: "Death"
	},
	{
	Name: "The Vampire",
	Affiliation: "Occult",
	Motive: "Survival",
	Method: "Subterfuge",
	Result: "Death"
	},
	{
	Name: "Ancestor Spirits",
	Affiliation: "Occult",
	Motive: "Ideology",
	Method: "Threats",
	Result: "Physiological"
	},
	{
	Name: "Mrs. Paddock",
	Affiliation: "Occult",
	Motive: "Ideology",
	Method: "Threats",
	Result: "Death"
	},
	{
	Name: "Col. Wharton, Zombie Master",
	Affiliation: "Occult",
	Motive: "Knowledge",
	Method: "Subterfuge",
	Result: "Insanity"
	},
	{
	Name: "Michael Holvery, The Evil One",
	Affiliation: "Occult",
	Motive: "Ideology",
	Method: "Possession",
	Result: "Physiological"
	},
	{
	Name: "Howard Graves, The Poltergeist",
	Affiliation: "Occult",
	Motive: "Security",
	Method: "Threats",
	Result: "Manipulation"
	},
    // add more data objects here
  ];
  return dataSet;
}

//Function to set Characteristic dropdown
function setCharacteristicOptions() {
  const options = ['Affiliation', 'Motive', 'Method', 'Result'];
  characteristicDropdown = document.getElementById('characteristic');

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    characteristicDropdown.appendChild(optionElement);
  });
}

//Function to set Type dropdown
function setTypeOptions() {
  typeDropdown = document.getElementById('type');
  characteristicDropdown = document.getElementById('characteristic');
  let options = [];

  if (characteristicDropdown.value == 'Affiliation') {
    options = ['Alien', 'Government', 'Evolutionary', 'Primordial', 'Occult'];
  } else if (characteristicDropdown.value == 'Motive') {
    options = ['Control', 'Ideology', 'Knowledge', 'Security', 'Survival'];
  } else if (characteristicDropdown.value == 'Method') {
    options = ['Manipulation', 'Possession', 'Subterfuge', 'Threats', 'Violence'];
  } else if (characteristicDropdown.value == 'Result') {
    options = ['Abduction', 'Death', 'Insanity', 'Manipulation', 'Physiological'];
  }

  typeDropdown.innerHTML = ''; // Clear existing options

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    typeDropdown.appendChild(optionElement);
  });
  dataUpdate();
}

//Function to set X-Files dropdown
function setXfileOptions() {
  xfileDropdown = document.getElementById('x-files-select');
  
    // Remove previous options from the dropdown
  xfileDropdown.innerHTML = '';

  // Add new options to the dropdown
  xlist.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.Name;
    optionElement.textContent = option.Name;
    xfileDropdown.appendChild(optionElement);
  });
}

function dataUpdate(){
	setXfileOptions();
	updateItemCount();
	selectSize();
}


//New Game Button, Reset Data Set
function resetDataSet() {
	xlist = createDataSet();
	dataUpdate();
}

//Eliminate Button, Remove Items From Data Set
function eliminateItem() {
  var selectChar = document.getElementById("characteristic");
  var selectType = document.getElementById("type");
  var selectCharVal = selectChar.options[selectChar.selectedIndex].value;
  var type = selectType.options[selectType.selectedIndex].value;
  var filteredData = xlist.filter(function(item) {
	  if(selectCharVal == "Affiliation"){
		  return item.Affiliation !== type;
	  }else if(selectCharVal == "Motive"){
		  return item.Motive !== type;
	  }else if(selectCharVal == "Method"){
		  return item.Method !== type;
	  }else if(selectCharVal == "Result"){
		  return item.Result !== type;
	  }else {
    return item;
	  }
  });
  xlist = filteredData;
  dataUpdate();
}

//Confirm Button, Remove NonMatching Items From Data Set
function filterData() {
  var confirmChar = document.getElementById('characteristic').value;
  const confirmType = document.getElementById('type').value;
  

  var filteredData = xlist.filter((item) => {
	  if(confirmChar == "Affiliation"){
		  return item.Affiliation == confirmType;
	  }else if(confirmChar == "Motive"){
		  return item.Motive == confirmType;
	  }else if(confirmChar == "Method"){
		  return item.Method == confirmType;
	  }else if(confirmChar == "Result"){
		  return item.Result == confirmType;
	  }else {
    return item;
	  }
  });
  xlist = filteredData;
  dataUpdate();
}

//Update # File count
function updateItemCount() {
  var selectChar = document.getElementById("characteristic");
  var selectType = document.getElementById("type");
  var selectCharVal = selectChar.options[selectChar.selectedIndex].value;
  var type = selectType.options[selectType.selectedIndex].value;
  const filteredList = xlist.filter(function(item) {
	  if(selectCharVal == "Affiliation"){
		  return item.Affiliation == type;
	  }else if(selectCharVal == "Motive"){
		  return item.Motive == type;
	  }else if(selectCharVal == "Method"){
		  return item.Method == type;
	  }else if(selectCharVal == "Result"){
		  return item.Result == type;
	  }else {
    return item;
	  }
  });
  const itemCount = filteredList.length;
  const itemCountElement = document.getElementById("file-count");
  if(itemCount > 1 || itemCount == 0){
	  itemCountElement.textContent = itemCount + " Files";
  }else{
	  itemCountElement.textContent = itemCount + " File";
  }
}


//Keep Screen Awake
const wakeLockSupported = 'wakeLock' in navigator;

if (wakeLockSupported) {
  // Request a screen wake lock
  navigator.wakeLock.request('screen').then(wakeLock => {
    // Check if the battery level is above 30% every 10 seconds
    setInterval(() => {
      navigator.getBattery().then(battery => {
        if (battery.level > 0.3) {
          wakeLock.request();
        } else {
          wakeLock.release();
        }
      });
    }, 10000);
  }).catch(error => {
    console.error('Failed to acquire wake lock:', error);
  });
}

function selectSize(){
//****************************************************************

// Iterate over each select box
selectBoxes.forEach(selectBox => {
  let maxWidth = 0;

  // Iterate over each option and find the widest one
  selectBox.querySelectorAll('option').forEach(option => {
    const tempOption = document.createElement('option');
    tempOption.style.display = 'inline';
    tempOption.style.visibility = 'hidden';
     tempOption.textContent = option.textContent;
    selectBox.appendChild(tempOption);
    const optionWidth = tempOption.textContent.length * 8;console.log(tempOption.textContent.length);
    selectBox.removeChild(tempOption);
    if (optionWidth > maxWidth) {
      maxWidth = optionWidth;
    }
  });

  // Add some padding to the maximum width and set it as the width of the select box
  selectBox.style.width = maxWidth + 40 + `px`;
});
//******************************************************************
}
