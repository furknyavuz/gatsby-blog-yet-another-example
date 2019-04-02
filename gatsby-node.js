
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

exports.createPages = async ({graphql, actions: {createPage}}) => {

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `{
                  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
                    edges {
                      node {
                        id
                        frontmatter {
                          title
                          date(formatString: "DD MMMM YYYY")
                          path
                        }
                        excerpt
                        rawMarkdownBody
                        timeToRead
                      }
                    }
                  }
                }`).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors)
                }

                const blogEdges = result.data.allMarkdownRemark.edges;

                const blog = blogEdges;

                createPage({
                    path: `/`,
                    component: require.resolve('./src/templates/blog.js'),
                    context: {blog}
                });

                blogEdges.forEach((blogEdge) => {
                    const post = blogEdge.node;
                    createPage({
                        path: `/blog/${post.frontmatter.path}`,
                        component: require.resolve('./src/templates/post.js'),
                        context: {post},
                    })
                });
            })
        )
    })
};
