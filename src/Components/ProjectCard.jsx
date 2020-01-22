import React, { Component } from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import "./css/ProjectCard.css";

export class ProjectCard extends Component {
  render() {
    const {
      name,
      used_technology,
      photo_url,
      description,
      date,
      app_url,
      repository_url
    } = this.props.project;

    return (
      <Card>
        <Card.Header as="h5">
          <Card.Link className="header" href={app_url} target="_blank">
            {name}
          </Card.Link>
        </Card.Header>

        <Card.Link href={app_url} target="_blank">
          <Card.Img alt=" " variant="top" src={photo_url} href={app_url} />
        </Card.Link>

        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>{used_technology}</ListGroup.Item>
        </ListGroup>

        <Card.Body className="link-body">
          {Object.keys(repository_url).map(repo => (
            <Card.Link
              key={repository_url[repo]}
              href={repository_url[repo]}
              target="_blank"
            >
              {repo}
            </Card.Link>
          ))}
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">{date}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default ProjectCard;