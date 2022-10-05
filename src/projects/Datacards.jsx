import {Button, Card, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './Projects.css';

const ProjectCard = (props) => {
  return (
    <div className="App">  
      <Container className='p-4'>  
        <Col md="4">  
          <Card>  
            <Card.Img className = 'project-image' variant = "top" src = {props.imgPath} />  
            <Card.Body>  
              <Card.Title>{props.title}</Card.Title>  
              <Card.Text>  
                {props.description}
              </Card.Text>  
                <Button variant="primary" href = {props.link}>Learn More</Button>  
            </Card.Body>  
          </Card>  
        </Col>  
      </Container>  
    </div>  
  );
}

export default ProjectCard;