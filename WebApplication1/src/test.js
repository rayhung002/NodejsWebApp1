import Button from './Button.js';

const listComponent = {
    button: React.createElement(Button, null)
};

class ShoppingList extends React.Component {
    render() {
        return React.createElement(
            'ul',
            null,
            listComponent["button"]
        );
    }
}

ReactDOM.render(React.createElement(ShoppingList, null), document.getElementById('root'));