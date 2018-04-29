import React from 'react';
import { Card, Col, Row } from "reactstrap";

const PickingRow = (props) =>{

    return(

        <div id="picking-row">
                    <Row>
                        <Col>
                            <Card onClick={()=>props.newImageBlock()}>
                                Add an Image Block
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                Add a Text Block
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                Add an Image and Text Block
                            </Card>
                        </Col>
                    </Row>
        </div>
    );

}

export default PickingRow;