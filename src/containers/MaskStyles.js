import React from 'react';
import {Card} from 'react-bootstrap'

class MaskStyles extends React.Component
{
    render()
    {
        return (
        <div>
            <h1>Mask Styles</h1>
            <div className="container-fluid">
                <div className="row ">
                    <div style={{width:"260px"}}>
                        <img className="card-img-top"
                             src={"/styles/style1front.jpg"}
                             height="250px"
                             width="250px"
                             alt="Style 1 Front"  />
                        <Card.Body >
                            Style 1, Front View
                        </Card.Body>
                    </div>
                    <div style={{width:"260px"}}>
                        <img className="card-img-top"
                             src={"/styles/style1side.jpg"}
                             height="250px"
                             width="250px"
                             alt="Style 1 Side"  />
                        <Card.Body >
                            Style 1, Side View
                        </Card.Body>
                    </div>


                    <div style={{width:"260px"}}>
                        <img className="card-img-top"
                             height="250px"
                             width="250px"
                             src={"/styles/style2front.jpg"}
                             alt="Style 2 Front"  />
                        <Card.Body >
                            Style 2, Front View
                        </Card.Body>
                    </div>
                    <div style={{width:"260px"}}>
                        <img className="card-img-top"

                             width="250px"
                             height="250px"
                             src={"/styles/style2side.jpg"}
                             alt="Style 2 Side"  />
                        <Card.Body >
                            Style 2, Side View
                        </Card.Body>
                    </div>

                    <div style={{width:"260px"}}>
                        <img className="card-img-top"
                             src={"/styles/style3front.jpg"}
                             height="250px"
                             width="250px"
                             alt="Style 3 Front"  />
                        <div >
                            Style 3, Front View
                        </div>
                    </div>
                    <div style={{width:"260px"}}>
                        <img className="card-img-top"
                             src={"/styles/style3side.jpg"}
                             height="250px"
                             width="250px"
                             alt="Style 3 Side"  />
                        <Card.Body >
                            Style 3, Side View
                        </Card.Body>
                    </div>
                    <div style={{width:"260px"}}>
                        <img className="card-img-top"
                             src={"/styles/style3back.jpg"}
                             height="250px"
                             width="250px"
                             alt="Style 3 Back"  />
                        <Card.Body >
                            Style 3, Back View
                        </Card.Body>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div style={{width:"260px"}}>
                    <img className="card-img-top"
                         src={"/styles/kidsmask1.jpg"}
                         height="250px"
                         width="250px"
                         alt="Kids Side View"  />
                    <Card.Body >
                        kids mask - side view
                    </Card.Body>
                </div>
            </div>

            <div className="row ">
                <div style={{width:"260px"}}>
                    <img className="card-img-top"
                         src={"/styles/3dmaskimage.jpg"}
                         height="250px"
                         width="250px"
                         alt="3d Mask"  />
                    <Card.Body >
                        3d Mask - provides more space between front of the mask and your lips.
                    </Card.Body>
                </div>

                <div style={{width:"260px"}}>
                    <img className="card-img-top"
                         src={"/styles/window1.jpg"}
                         height="250px"
                         width="250px"
                         alt="Window Mask"  />
                    <Card.Body >
                        Windows Mask Side - 3d Mask with Window so other can see you talk.
                    </Card.Body>
                </div>
                <div style={{width:"260px"}}>
                    <img className="card-img-top"
                         src={"/styles/window2.jpg"}
                         height="250px"
                         width="250px"
                         alt="Window Mask 2"  />
                    <Card.Body >
                        Windows Mask Front.
                    </Card.Body>
                </div>
            </div>
        </div>);
    }
}

export default MaskStyles;