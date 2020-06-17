import React from 'react';
import {  Badge } from 'react-bootstrap';

class SwatchItem extends React.Component
{

    render()
    {
        return (
            <div style={{boxShadow: "5px 5px 5px 5px #888888",
                backgroundColor: (this.props.item.cat.includes("prem") ? "#ffd9d9" : "white"),
                width: "250px",
                marginRight: "10px",
                marginLeft: "10px",
                marginBottom: "50px",
                padding: "10px 25px",
                borderRadius: "4px",
                border: "solid 1px black"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div><strong>Swatch ID</strong></div>
                    <div><strong>Date Added</strong></div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>{this.props.item.id}</div>
                    <div>{this.props.item.addDate}</div>
                </div>
                <div style={{
                    width: "200px", 
                    height: "200px", 
                    backgroundImage:`url(${"/swatches/" + this.props.item.name + "_thumb.jpg"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}></div>
                <div>
                    <div><strong>Description:</strong></div>
                    <div style={{margin: "5px 0", minHeight: "40px", fontSize:"20px", lineHeight:"20px"}}>{this.props.item.desc}</div>
                    <div><strong>Tags:</strong></div>
                    <div style={{minHeight: "40px"}}>
                        {this.getPills()}
                    </div>
                </div>
            </div>
        );
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