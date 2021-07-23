# reTerminal Hardware Access/ Control Demo Using Electron

This is a demo application to access and control hardware on the [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html). Here you can view the accelerometer data, light intensity data, button presses and control the onboard LEDs and also interact with the touch panel!

Here I have used Electron to build the app. Electron is an open-source framework for creating native desktop applications (Windows, Mac, Linux) with web technologies like HTML, CSS and JavaScript. This means if you can build a website, you can build a desktop app!

Also, [npm-reterminal](https://www.npmjs.com/package/npm-reterminal) package is used in this demo to load the reTerminal npm library.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"></p>

## Install

First, we will install **Node.js** along with **npm** on the reTerminal. npm is a package manager for Node.js packages.  

- **Step 1.** Access reTerminal using the **onboard LCD, external display or SSH** as explained [here](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)

- **Step 2.** Update the package list

```sh
sudo apt update
```

- **Step 3.** Download the script to install Node.js

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **Step 4.** Install Node.js

```sh
sudo apt install -y nodejs
```

Node.js is now installed on the reTerminal. To check whether the installation is sucessful, run the following commands to check the version of **Node.js** and **npm**

```sh
node -v
npm -v
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"></p>

## Usage

- **Step 1.** Clone this repo

```sh
git clone https://github.com/lakshanthad/Electron_reterminal_hardware
```

- **Step 2.** Navigate to the **Electron_reterminal_hardware** directory

```sh
cd Electron_reterminal_hardware
```

- **Step 3.** Install the app with the necessary libraries included

```sh
npm install
```

- **Step 4.** Launch the app on the reTerminal

```sh
npm test
```