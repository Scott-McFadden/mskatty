import React from 'react';

class OrderForm extends React.Component
{
    render()
    {
        return (
        <div>
            <h1>How To Order</h1>
            <p> </p>
            <ol>
                <li>Pick your swatches  Write down the DSC/DSP name</li>
                <li>Pick your Style (1,2,3 or kids)</li>
                <li>Text katty at (615) 397-9197 or email kattymcfadden@yahoo.com with your order details.</li>
                <li>Payments forms are Cash or <a href="http://https://cash.app/" >Cash App</a> ($mskattym) </li>
                <li>Order confirmation and details will be provided.</li>
            </ol>

            <h1>Prices</h1>
            <div className="indent">
            <p  >Normal Masks:   $5.00</p>
            <p>Normal Premiumn Masks: $6.00 <br/>
            (licensed materials and sports teams)</p>
            <p>3D Masks: $8.00</p>
            <p>3D Masks with Mouth Window: $10.00</p></div>
        </div>);
    }
}

export default OrderForm;