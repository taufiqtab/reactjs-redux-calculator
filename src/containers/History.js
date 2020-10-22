import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectHistory, clearHistory} from '../actions/index'

class History extends Component{
    render(){
        return(
            <div>
                <h4><i className="fa fa-clock"> History Operator</i></h4>
                <ul className="list_group">
                    {this.props.history.map((history, index) =>(
                        <li key={index} className="list-group-item list-group-item-action" onClick={()=>{
                        this.props.selectHistory(index) }}>{`${history} = ${eval(history)}`}</li>
                    ))}
                </ul>
                <div className="mt-3 text-right">
                    <button className="btn btn-danger" onClick={()=>{this.props.clearHistory()}}><i className="fa fa-trash" /> Clear</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        history: state.calculator.history
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectHistory, clearHistory}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(History)