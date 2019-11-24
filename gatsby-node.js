const path = require("path");

exports.createPages = async({graphql,actions}) => {
    const {createPage} = actions

    const {data} = await graphql(`
        query{
            flyers:allContentfulFlyer{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)
data.flyers.edges.forEach(({node}) => {
    createPage({
        path: `flyers/${node.slug}`,
        component: path.resolve("./src/templates/flyerTemplate.js"),
        context: {
            slug: node.slug,
        },
    })
})

}