import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: 1,
                item: 'apple',
                quantity: 10,
            }],
            currentItem: [],
        };
        this.setItem = this.setItem.bind(this);
        this.setQuantity = this.setQuantity.bind(this);
        this.setSubmit = this.setSubmit.bind(this);
    }

    setItem(e) {
        this.setState({
            currentItem: { ...this.state.currentItem, item: e.target.value }
        });
    }

    setQuantity(e) {
        this.setState({
            currentItem: { ...this.state.currentItem, quantity: e.target.value }
        });
        console.log(this.state.currentItem);
    }

    setSubmit(e) {
        if (this.state.currentItem.length === 0) return false;
        e.preventDefault();
        const item = { ...this.state.currentItem, id: window.id + 1 };
        this.state.items.push(item);
        this.setState({
            items: this.state.items,
            currentItem: []
        });
    }

    render() {

        return (
            <div>
                Item: <input type='text' onChange={this.setItem} /><br />
                Quantity: <input type='text' onChange={this.setQuantity} />
                <button onClick={this.setSubmit}>Submit</button>
                <ul>
                    {this.state.items.map((item) => {
                        return <li key={item.id}>{item.item}</li>
                    })}
                </ul>                <p>Quantity: {this.state.items.map((item) => Number(item.quantity)).reduce((a, b) => a + b)}</p>

            </div>
        )
    }
}
