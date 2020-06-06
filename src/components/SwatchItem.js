import React from 'react';
import {  Badge, Col, Row } from 'react-bootstrap';

class SwatchItem extends React.Component
{
    render()
    {

        //style={{ width: '250px!important' }}
        return (
        <div className="col col250"  >
        <div className="card"  >
            <img className="card-img-top"
                     src={"/swatches/" +this.props.item.name + "_thumb.jpg"}
                     style={{ width: '200px', marginLeft: "25px", marginTop: "5px" }}
                     height="132"
                     alt={this.props.item.name}  />
            <div className="card-body"  style={{ maxWidth: '250px!important' }}>
                <h3 className="cardWidth250 center">
                     {this.props.item.desc}
                </h3>

                    <Row >
                        <Col>Name:</Col>
                        <Col>{this.props.item.name}</Col>
                    </Row>
                    <Row >
                        <Col>Date Added</Col>
                        <Col>{this.props.item.addDate}</Col>
                    </Row>
                    <Row className="cardWidth250 center">
                        {this.getPills()}
                    </Row>

            </div>

        </div></div>);
    }

    getPills()
    {
        let things = [];
        let cat = {};
        for ( var a = 0; a< this.props.item.cat.length; a++ )
        {
            cat = this.props.item.cat[a];
            things.push(<Badge key={cat} pill variant={this.IsSelected(cat)} style={{marginLeft:"3px", marginTop: "3px"}}>{cat}</Badge> );
            things.push(" ");
        }

        return things;
    }

    IsSelected(key)
    {
        let ret = "primary";
        if (this.props.selected)
        {
            if(this.props.selected.length > 0)
            {
                if (this.props.selected.find((item) => this.test(item, key)) !== undefined)
                    ret = "secondary";
            }
        }
        return ret;
    }

    test(key, keyin, )
    {
         return key === keyin;
    }


}
export default SwatchItem;