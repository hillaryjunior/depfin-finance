
# Depfin Finance

This is a wesbite built for Depfin Finance aand was built using Next Js and is hosted on firebase.

# Get Started

To get Started with the project you need to have the following development environment to make edits to the website.





## Installation

prerequisites:

Download and install these tools on your pc/laptop

Git (https://git-scm.com/)

node js (https://nodejs.org/en/download/)

Visual studio code (https://code.visualstudio.com/) or any code editor of your choice


# Set up git

open the command prompt (CMD) :

On windows
Type “Cmd” in Windows search and click on the app in results to run it.

Select run as administrator

if confused refer to this article
https://www.lifewire.com/how-to-open-command-prompt-2618089


after installing git open git bash and run the following commands

git config --global user.name depfinfinance

git config --global user.email noreplydepfin@gmail.com

git config --global github.user depfinfinance

git config --global github.token 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



# Set up node js 

download the installer https://nodejs.org/en/download/ and run it when the download finishes and just follow the prompts

 if confused refer to the following article to set up node js on your pc

https://phoenixnap.com/kb/install-node-js-npm-on-windows


#Set up visual studio code 

Download and open the installer and just follow the commands

if confused refer to this article
https://code.visualstudio.com/learn/get-started/basics



After you have successfully installed all these tools

Time to set up the project 

# Set up the project

Login into github (https://github.com/depfinfinance/depfin-finance) and download the project or follow this link to download (https://we.tl/t-yhGbndHGxV)

when asked for username and password use:
username : noreplydepfin@gmail.com
password : @finance22

to clone the repository on your local machine run this command in the CMD
git clone https://github.com/depfinfinance/depfin-finance.git

or just download the  folder from (https://we.tl/t-yhGbndHGxV)


# Open the project

open visual studio code and open the folder you cloned or downloaded


This project depends on javascript packages to work so after opening the project open the cmd in visual studio code and run these commands




    
## Run Locally




Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

after making changes build the project


```bash
  npm run build
```

this will product a folder named out that you can deploy on your cpanel





## Project Structure

![App Screenshot](https://res.cloudinary.com/devtedcloud/image/upload/v1657527661/Screenshot_2022-07-11_at_09.54.38_cxk2hs.png)

# Pages folder

This is where all pages of the website are located

![screenshot](https://res.cloudinary.com/devtedcloud/image/upload/v1657528249/Screenshot_2022-07-11_at_10.30.20_td8f8o.png)


# This is a folder called components

this is where where you can make changes to the stuff on each pages 
note only make changes to texts.


![screenshot](https://res.cloudinary.com/devtedcloud/image/upload/v1657528599/Screenshot_2022-07-11_at_10.35.43_cymqut.png)


## insert meta tags

![App Screenshot](https://res.cloudinary.com/devtedcloud/image/upload/v1657528997/Screenshot_2022-07-11_at_10.42.48_bylj8m.png)



# example Make changes to navigation 

you can find the content of menu in the HEADER.JS component and make changes


![screenshot](https://res.cloudinary.com/devtedcloud/image/upload/v1657529862/Screenshot_2022-07-11_at_10.42.48_frpzm4.png)





## Deployment

After making changes you can push these changes to github by runnning the following commands


To deploy this project run

```bash
git remote add origin https://github.com/depfinfinance/depfin-finance (run once only after when pushing changes for the first time)

git add .

git commit -m "changes"

git push -u origin main

```

if you not logged in yet run
```bash

git config --global user.name depfinfinance

git config --global user.email noreplydepfin@gmail.com

git config --global github.user depfinfinance

git config --global github.token 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

```

your changes will be on bit bucket and i'll deploy them on firebase.




