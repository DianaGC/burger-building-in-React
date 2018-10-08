import  React, {Component} from 'react';
import Aux from '../../hoc/Auxi';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/Tolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: true
    };
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    };
    sideDrawerToggledHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    };

    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggledHandler}  />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;