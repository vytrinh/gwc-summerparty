Phase I - Install & bring up the server
 
1.) Open a Terminal. Use the below commands to open a terminal in your system:
    a.) MAC
        1.) Press Command + Space bar, type terminal & hit enter
        OR
        2.) Open the Applications >> Utilities >> Terminal
    b.) Windows
        1.) Press "Window+R,” type "cmd" and press "Enter" to open a Command Line Interface
        OR
        2.) Click the "Start >> Program Files >> Accessories >> Command Prompt" to open a Command Prompt
 
2.) Install Node & NPM
    a.) MAC
        1.) Install Homebrew by typing:  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" in the terminal
        2.) To see if brew is installed, type "brew -v" in the terminal. This should should print the following:
        ```
        YUSUF-MacBook-Pro:~ yusufshakeel$ brew -v
        Homebrew 1.1.11
        Homebrew/homebrew-core (git revision be9c; last commit 2017-03-09)
        ```
        3.) Type “brew install node” in the terminal
        4.) To see if Node is installed, type “node -v” in Terminal. This should print the version number so you’ll see something like this v0.10.31.
        4.) To see if NPM is installed, type “npm -v” in Terminal. This should print the version number so you’ll see something like this 1.4.27
        5.) Reference Link : https://treehouse.github.io/installation-guides/mac/node-mac.html
    b.) Windows
        1.) Download the Windows installer from the Nodes.js® web site.
        2.) Run the installer (the .msi file you downloaded in the previous step.)
        3.) Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
        4.) Restart your computer. You won’t be able to run Node.js® until you restart your computer.
        5.) Reference Link : http://blog.teamtreehouse.com/install-node-js-npm-windows

3.) Install VS Code Editor.
    a.) MAC
        1.) Download Visual Studio Code for macOS.
        2.) Double-click on the downloaded archive to expand the contents.
        3.) Drag Visual Studio Code.app to the Applications folder, making it available in the Launchpad.
        4.) Reference Link : https://code.visualstudio.com/docs/setup/mac

    b.) Windows
        1.) Download the Visual Studio Code installer for Windows.
        2.) Once it is downloaded, run the installer (VSCodeSetup-version.exe). This will only take a minute.
        3.) By default, VS Code is installed under C:\Program Files\Microsoft VS Code for a 64-bit machine.
        4.) Reference Link : https://code.visualstudio.com/docs/setup/windows
 
4.) Clone the git repository by typing “git clone https://github.com/vytrinh/gwc-summerparty.git“ in the terminal
 
5.) Run the below commands on the terminal to install the dependencies & bringup the server
    a.) npm i -g webpack-dev-server
    b.) npm i
    c.) npm run start
 
6.) Then, navigate to http://localhost:8080 in the browser.
 
Phase II - Customize the app
 
We are finally done with installations and server is up & running. In next few steps we will customize the app :)
 
Activity 1: Change theme of the app.
    a.) Open up VS Code and type command + o. This should open up the a file finder.
    b.) Select the folder for the git repository that you cloned earlier in step 4.
    c.) In the editor left hand nav (type command + b to open if it's not already), select src >> css folder & double click on style.css to open the file.
    d.) To change the theme of the app do the following:
        * In the style.css file, change Line 8  to “background-image: url('../images/background_2.jpg');” & save the file. Goto back to the browser & the app will now have new background.
        * To change the logo of the app. In the editor, goto src >> components folder & click on app.js to open the file in the editor.
        * In the app.js file, at Line 6 add “import Logo2 from '../images/logo_2.png';”
        * In the app.js file, change Line 29 to “<img src={Logo2} />” & save the file. Goto back to the browser & the app has new a new logo :)
 
Activity 2 : Please note will update with the bonus activity later
  