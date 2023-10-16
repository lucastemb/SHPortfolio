# Getting Started with your SHPortfolio

Hi there! Welcome to SHPE UF's first SHPortfolio event. To get started please do the following:

1. Follow the instructions [here](https://code.visualstudio.com/download) to download VSCode. VSCode is the text editor we will be coding on!
2. Create a Github account if you do not have one [here](https://github.com/join)!
3. Download Git to your computer from [here](https://docs.github.com/en/get-started/quickstart/set-up-git#setting-up-git) and set your username & email in the terminal like so:
4. Download [Node](https://nodejs.org/en/download). This tool will allow us to download online resources that our website can use.
5. Download the zip file of this repository and unzip it.
6. Open VSCode and open this repository folder.

## Setup Scripts

With our tools installed (Node, Git, and VSCode), we can now run our program! Open the terminal and write the following two commands:

### `npm install`

This command installs all supporting packages that our repository needs to use to operate.

### `npm start`

This command runs the app in the development mode. You can open[http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload as you make changes.

## Personalize your portfolio

To understand the files you need to change, you need to understand the structure of our website:

### Sections

Our website is split into 4 sections: About me, Experience, Leadership, and Contact.
The code for each section is located in our `src/sections` folder.

For the sake of our 1st workshop, you do not need to make changes to these files.

### Assets

Assets are all types of media that our website uses. This can range from images to videos to resume pdfs.
You can access the assets folder in `public/assets`.

For your website you need to add the following media files:

1. For each experience and leadership position you wish to display, add the company/group's image/logo to `public/assets/experiences`.
2. For each Project you wish to display, add a descriptive logo/image to `public/assets/projects`.
3. Add your resume and profile image to `public/assets`.

### JSON Data

To further structure our information, we have shifted all of our data to exist in JSON files within `src/json-data`.
JSON stands for JavaScript Object Notation and is a text-based way to present data, that is simple to parse for both humans and machines.

We have divided each section into their own respective JSON files. Upon making changes in your json files, you should see updates in your website. Please follow the format of the current images and replace the final parts with yours. For example:

If your profile image is called `John.png`, replace `assets/tito.jpg` with `assets/John.png`. Capitalization matters!

To update your information, do the following:

1. Update the `aboutme.json` in `src/json-data` to update your about me section with your name, description, image, and more.
2. Update the `experience.json` in `src/json-data` to update your experiences section with their respective description and images.
3. Update the `leadership.json` in `src/json-data` to update your leadership experience section with their respective description and images.
4. Update the `projects.json` in `src/json-data` to update your projects section with their respective description and images.
5. Update the `contact.json` in `src/json-data` to update your contact section with your number, email, and linkedin.
