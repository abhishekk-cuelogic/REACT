import React,{Component} from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class  Layout extends Component{

    state={
        showSideDrawer: false
    }

    SideDrawerClosedhandler=()=>{
        this.setState({showSideDrawer: false});
    }

    SideDrawerToggleHandler=()=>{
        this.setState((prevState) =>{
            return { showSideDrawer: !prevState.showSideDrawer}
            
        });
    }

    render(){
        return(
        <Aux>
            <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedhandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}


export default Layout;