import React        from "react";
import { Card, CardBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Error.css"

class FourOhFour extends React.Component{

    state = {};
    
    componentDidMount(){

        let code = this.props.match.params.code;
        console.log("doing a mount");
        if(code){
            this.setState({errorCode: code});
        }

    };

    render(){

        return(
            <center>
            <div className="space">
            <Card className="error-card text-center">
            <CardBody>

                {/* Main card info */}

                <Row>

                    {/* Where users fill in answers */}

                    <Col className="text-left">
                        <h2>You've reached an error: {this.state.errorCode ? "CODE" : "NO CODE"}</h2>
                        <Button className="homebutton" href="/">Return Home
                        </Button>
                    </Col>
                </Row>
            </CardBody>
            </Card>
            </div>
          
        </center>



            

        )

    }

}

export default FourOhFour;