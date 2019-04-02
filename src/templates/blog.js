import React from "react"
import Layout from "../components/layout";
import {
    Col,
    Container,
    ListGroup,
    ListGroupItem, ListGroupItemText,
    Row
} from "reactstrap";
import ListGroupItemHeading from "reactstrap/es/ListGroupItemHeading";
import {Link} from "gatsby";

export default ({pageContext: {blog}}) => {

    return (
        <Layout>
            <ListGroup>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <div>
                                <ListGroupItem className="list-item">
                                    <ListGroupItemHeading className="text-muted">
                                        <div style={{paddingTop: "10px"}}>
                                            <h3>Blog</h3>
                                        </div>
                                    </ListGroupItemHeading>
                                </ListGroupItem>
                                {blog.map(post => (
                                    <ListGroupItem className="list-item">
                                        <Link to={`/blog/${post.node.frontmatter.path}`}
                                              style={{textDecoration: "none"}} className="text-muted">
                                            <ListGroupItemHeading>
                                                <h3>
                                                    {post.node.frontmatter.title}
                                                </h3>
                                                <small>{`${post.node.frontmatter.date} - time to read: ${post.node.timeToRead}min`}</small>
                                            </ListGroupItemHeading>
                                            <hr/>
                                            <ListGroupItemText style={{paddingTop: "16px"}}>
                                                <Container fluid={true}>
                                                    <Row className="d-flex">
                                                        <Col>
                                                            <p>
                                                                {`${post.node.excerpt}`}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </ListGroupItemText>
                                        </Link>
                                    </ListGroupItem>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ListGroup>
        </Layout>
    )
}
