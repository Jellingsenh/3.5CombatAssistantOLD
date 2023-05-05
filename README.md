Created by Josh Haynes 26 Dec 2021

This is a game to help streamline D&D combat. It will help keep track of character health, damage, armor, abilities, skills, spells, and many other things. The purpose of the game is to free your brain of the details of combat so you can be more immersed in the role-playing.

It is best used with real dice & having a DM to oversee everything & tweak characters as needed (I designed it to be highly customizable & less rigid in case a player does something unexpected).

--------------------

How to compile & run project:
  -> there are 2 main parts: a Maven & Java Spring Boot API server, and a React webapp.

1) to run the server:

  a) Download Eclipse<br>
  b) Select File -> Import Projects -> Existing Maven projects.<br>
  c) Select the API/rest-service/ folder, Select Enter.<br>
  d) Once Imported, set up a run configuration (right next to the green arrow). Java Application, Project = rest-service, Main class = RestServiceApplication.java.<br>
  e) Now you can just hit Run (the green arrow) to launch the server!

2) to run the webapp:
  
  a) Get Windows subsystem for Linux (if on Windows): https://docs.microsoft.com/en-us/windows/wsl/install<br>
  b) (In Ubuntu) Install React:<br>
      'sudo apt update && sudo apt upgrade'<br>
      'sudo apt install npm'<br>
      'sudo apt install nodejs'<br>
  c) Other dependencies (navigate into the dnd-gui folder): <br>
      ~~'sudo npm install'~~<br>
      'sudo npm install @material-ui/core'<br>
      'sudo npm install @material-ui/icons'<br>
      'sudo npm install react-dom'<br>
      'sudo npm install react-router-dom'<br>
  d) To run the website, navigate to the dnd-gui directory and enter: <br>
      'npm start'<br>

--------------------

You will have to replace the window.apiURL propery in index.js with your external ip address. 
This can be found by using a Linux command (in Ubuntu): 'curl ifconfig.co'.

--------------------

Make sure to update your port forwarding for both the server & the webpage ports!

--------------------

Don't use slashes ('\\' or '/') in your names! (it won't save)

--------------------
