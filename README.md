# Anxiety APP
## Project Links
- [Github Repo link](https://github.com/lta4/capstone-anxiety-app.git)
- [![Netlify Status](https://api.netlify.com/api/v1/badges/4bd9f976-915d-4960-bd9e-fe90eb7dead1/deploy-status)](https://app.netlify.com/sites/capstone-anxiety-app/deploys)
## Project Description
I wanted to design an app to help others to remember to slow down in such a fast paced environment. This app will help remind you to correct your breathing along with inspirational quotes you can apply to your everyday life. With a fun css animation, you'll be able to breathe in and out all your troubles that a challenging day has. A partial blog of anxiety and health issues will be included throughout the app.

## User Stories
- A user can enjoy the css breathing animation
- A user can click an inspirational quote
- A user can find out more about this web app in "About" tab
- A user can find resources and a video in the "Resource" tab
## API
For this project I will include a random inspirational quote API that you will be able to update, add, and delete to your favorites list. A  navigation bar will have forwarding links to certain areas in the site.
[Inspirational Random Quote](https://zenquotes.io/api/random) 


```
[
{
"q": "In all human affairs there are efforts, and there are results, and the strength of the effort is the measure of the result.",
"a": "James Allen",
"h": "<blockquote>&ldquo;In all human affairs there are efforts, and there are results, and the strength of the effort is the measure of the result.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
}
]
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.
- Main-[Mobile/Tablet/Desktop](https://res.cloudinary.com/dfltkqotn/image/upload/v1614630421/IMG_4960_munf13.jpg)
- Fav-[Mobile/Tablet/Desktop](https://res.cloudinary.com/dfltkqotn/image/upload/v1614630458/IMG_4961_yosjnf.jpg)
- About & Resources-[Mobile/Tablet/Desktop](https://res.cloudinary.com/dfltkqotn/image/upload/v1614630479/IMG_4962_p0vlfw.jpg)
- Time Frame-[React Architecture/MVP/Post MVP](https://res.cloudinary.com/dfltkqotn/image/upload/v1614630363/IMG_4963_q4svfe.jpg)

## Models & Properties
### Models-
- Quote
- Fav

### Properties-
#### "Quote" Props:
- "q" : string
- "a" : string 
- "h" : string
#### "Fav" Props:
- "q" : string
- "a" : string
- "h" : string
### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  
#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Nav | H | 2.5hr | hr |
| Nav Links | H | 2.5hr | hr |
| HTML | H | 2.5hr | hr |
| CSS | L | 3hr | hr |
| Grid Layout | H | 3hr | hr |
| Flex Box | H | 3hr | hr |  
| Adding Format | H | 2.5hr|  hr | 
| Mobile Responsive | H | 3hr | hr |
| Tablet Responsive | H | 3hr | hr |
| Desktop Responsive | H | 3hr | hr |
| API | H | 3hr | hr |
| Breathing Animation | H | 2.5hr | hr |
| Total | H | 33.5hrs| hr |
#### PostMVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Nav Aesthetics | H | 2.5hr | hr |
| CSS Styling | H | 3hr | hr |
| Email Icon | L | 2hr | hr |
| Social Media Icons | L | 3hr | hr |
| Smooth Scroll | H | 2hr | hr |
| Project Review | H | 3hr | hr |
| Total | H | 15.5hrs| hr |
## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 
| Component | Description | Priority | Estimated Time | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| App {State} | Holds state including React Router | H | 2.5hr | hr |
| Nav | Rendered by App | H | 2.5hr | hr |
| Main{State} | This will render Form and Container | H | 2.5hr | hr |
| About {State} | Rendered by App | H | 2hr | hr |
| Resources | Holds state | H | 3hr | hr |
| Footer | Rendered by App | L | 2hr | hr |
## Additional Libraries
- [Medium: Creating a GraphQL Server with Node.js and Express](https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1)
- [Gatsby](https://gatsbyjs.com/)
- [GraphQL: Queries and Mutations](https://graphql.org/learn/queries/)
- [GraphQL: GraphQL Clients](https://graphql.org/graphql-js/graphql-clients/)
- [StackOverFlow](https://stackoverflow.com/)
- [CSS-Tricks & Geoff Graham](https://css-tricks.com/recreating-apple-watch-breathe-app-animation/) who helped me visualize the importance of taking.a.deep.breath. Thank you.
- [Inspirational Random Quote](https://zenquotes.io/api/random) for generating quotes from the infamous
- [Youtube](https://youtube.com)
- [Youtube/Meditate](https://youtube.com/embed/tqG-RTyJOjg)
- [Youtube/Russell Brand](https://www.youtube.com/embed/zq85xzRg6SM&t=523s)
-[Youtube/Focus Mind](https://www.youtube.com/embed/Hg1-NHJ7-sY&t=138s)

## Code Snippet

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
