import Button from './Button.js'; 

const listComponent = {
    button: <Button />
}

class ShoppingList extends React.Component {
    render() {
        return (
            <ul>{listComponent["button"]}</ul>
        );
    }
}

ReactDOM.render(
    <ShoppingList />,
    document.getElementById('root')
);
