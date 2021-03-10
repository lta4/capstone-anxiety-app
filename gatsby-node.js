/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const quoteTemplate = path.resolve(`src/templates/quote-list.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    {
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        author
                        date
                        path
                    }
                    html
                }
            }
        }
     breathe {
       quotes {
         q
         a
         id
       }
     }
  }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(result.data.allMarkdownRemark)
    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(markdown => {
      createPage({
        // Path for this page — required
        path: `andrew/${markdown.node.frontmatter.path}`, // 
        component: blogPostTemplate,
        context: {
            blog: markdown
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
    result.data.breathe.quotes.forEach(quote => {
      createPage({
        // Path for this page — required
        path: `${quote.id}`,
        component: quoteTemplate,
        context: {
            blog: quote
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}

// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const quoteListTemplate = path.resolve(`src/templates/quote-list.js`)
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   return graphql(`
//   {
//     breathe {
//       quotes {
//         q
//         a
//       }
//     }
//   }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//     console.log("result", result.data.breathe.quotes)
//     // Create blog post pages.
//     result.data.breathe.quotes.forEach(quote => {
//       createPage({
//         // Path for this page — required
//         path: `${quote.path}`,
//         component: quoteListTemplate,
//         context: {
//             breathe: quote
//           // Add optional context data to be inserted
//           // as props into the page component..
//           //
//           // The context data can also be used as
//           // arguments to the page GraphQL query.
//           //
//           // The page "path" is always available as a GraphQL
//           // argument.
//         },
//       })
//     })
//   })
// }