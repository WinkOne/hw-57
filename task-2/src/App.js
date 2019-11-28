import React, {Component} from 'react';
import nanoid from 'nanoid';
import Resource from "./Components/Resource/Resource";
import './App.css'
import Input from "./Components/Input/Input";

class App extends Component {
    state = {
        textIndex: '',
        totalIndex: 0,
        resource: [],
        TOTAL: 0
    };
    addResource = event => {
        this.setState({textIndex: event.target.value} );
    };
    addResourceTotal = event => {
        this.setState({totalIndex: event.target.value} );
    };
    addMessage = () => {
        const resource = [...this.state.resource];
        resource.push({text: this.state.textIndex, total: this.state.totalIndex,  id: nanoid()});
        let thisTotal = this.state.TOTAL;
        thisTotal += parseInt(this.state.totalIndex);
        this.setState({resource, TOTAL: thisTotal});
    };
    removeResource = index => {
        let thisTotal = this.state.TOTAL;
        thisTotal -= this.state.resource[index].total;
        const resource = this.state.resource;
        resource.splice(index, 1);
        this.setState({TOTAL: thisTotal, resource});
    };
    render() {
        return (
            <div className='App'>
                <header/>
                <div className='container'>
                    <Input
                        addTotal={this.addResourceTotal}
                        add={this.addResource}
                        getAdd={this.addMessage}
                    />
                    {this.state.resource.map((res, index) => (
                        <Resource
                            key={index}
                            name={res.text}
                            totals={res.total}
                            removeResouce={() => this.removeResource(index)}
                        />
                    ))}
                    <div className='orderTotal'>
                        <span className='total'>Total: {this.state.TOTAL} $</span>
                    </div>
                </div>
                <footer/>
            </div>
        );
    }
}

export default App;