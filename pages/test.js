import React from 'react';
import
    {
        Tabset, Tab, ButtonGroup, ButtonIcon    } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faFolderOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import Load from './load';
import Zone from './zoneInventory';
import Home from './index';
import Menu from './menu';
import Stat from './stats';
import Hello from './hello';
// const StyledHeader = styled.div.attrs(props => {
//     return props.theme.rainbow.palette;
// })`
//     color: ${props => props.text.main};
// `;

// const StyledTabContent = styled.div.attrs(props => {
//     return props.theme.rainbow.palette;
// })`
//     background: ${props => props.background.main};
//     color: ${props => props.text.label};
//     height: 200px;
//     border-radius: 0 0 0.875rem 0.875rem;
// `;

class TabsetExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'hello',
            isRecentsAdded: false
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    getTabContent() {
        const { selected } = this.state;
        console.log("🚀 ~ file: test.js ~ line 37 ~ TabsetExample ~ getTabContent ~ selected", selected)
        
        if (selected === 'hello') {
            return (
                <Hello />
                
            );
        }if (selected === 'home') {
            return (
             <Home />
            );
        }
        if ( selected === 'zone' )
        {
            return (
             <Zone />
            );
        }
        if ( selected === 'pallets' )
        {
            return (
             <Menu />
            );
        }
        if (selected === 'loadtags') {
            return (
              <Load />
            );
        }
        if (selected === 'stats') {
            return (
            
              <Stat />
            );
        }
    }

    handleOnSelect(event, selected) {
        this.setState({ selected });
    }


    render() {
        const { selected } = this.state;
        return (
            <div>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <Tabset
                        fullWidth
                        id="tabset-2"
                        onSelect={this.handleOnSelect}
                        activeTabName={selected}
                        className="rainbow-p-horizontal_x-large"
                    >
                        <Tab
                            name="home"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faFolderOpen} /> HOME
                                </span>
                            }
                        />

                        <Tab
                            name="zone"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faClock} /> Zone Inventory
                                </span>
                            }
                        />

                        <Tab
                            name="pallets"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faStar} /> Pallet Inventory
                                </span>
                            }
                        />

                        <Tab
                            name="loadtags"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faLock} /> Active LoadTags list 
                                </span>
                            }
                        />
                        <Tab
                        name="stats"
                        label={
                            <span>
                                <FontAwesomeIcon icon={faLock} /> Statistics 
                            </span>
                        }
                    />
                    </Tabset>
                    {this.getTabContent()}
                </div>
            </div>
        );
    }
}
export default TabsetExample;