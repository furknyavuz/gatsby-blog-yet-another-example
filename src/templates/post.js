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
import ReactMarkdown from "react-markdown";

export default ({pageContext: {post}}) => {

    return (
        <Layout>
            <ListGroup>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <div>
                                <ListGroupItem className="list-item text-muted">
                                    <ListGroupItemHeading>
                                        <h3>
                                            {post.frontmatter.title}
                                        </h3>
                                        <small>{post.frontmatter.date}</small>
                                    </ListGroupItemHeading>
                                    <hr/>
                                    <ListGroupItemText style={{paddingTop: "16px"}}>
                                        <Container fluid={true}>
                                            <Row className="d-flex">
                                                <Col>
                                                    <ReactMarkdown source={post.rawMarkdownBody}/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem className="list-item">
                                    <Link to={`/`} style={{textDecoration: "none"}}>
                                        <ListGroupItemHeading className="text-muted">
                                            <div style={{paddingTop: "10px"}}>
                                                <h4>{`< back`}</h4>
                                            </div>
                                        </ListGroupItemHeading>
                                    </Link>
                                </ListGroupItem>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ListGroup>
        </Layout>
    )
}
