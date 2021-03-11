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
### Something I'm proud of
```
const data = useStaticQuery(graphql`
  {
    breathe {
      quotes {
        q
        a
        id
      }
    }
  }
  `)
  console.log(data)
```
-This query took a lot of understanding behind it. It's what holds all my data, how my website will be built, and a better understanding of how integrating GraphiQL & PostGraphile work. This query is so versatile within Gatsby/React and can be used to create pages/blogs as well as using "Static Queries" for video plugins/images and variables.

### Issues
```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          author
          date
          path
          title
        }
      }
    }
  }
}
```
-Dealing with queries can be difficult. But essentially you can read it as if you were to open up your Dev Tools and look for a console.log of data to find the endpoint. Notice how edges and node are both implemented in this query and not my original? My issue was dealing with the fact on how I created and seeded my database. There was no seed or migrate. Instead I created more so of a table of "Static Query" rather than one that integrates together with edges and node. Without them, your properties cannot find each other and there is no path to manipulate the data.

![scribble](https://github.com/lta4/capstone-anxiety-app/issues/1#issue-829384574)