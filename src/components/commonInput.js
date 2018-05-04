import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class commonInput extends Component{
    static propTypes={
    	username:PropTypes.any,
    	onSubmit:PropTypes.func,
    	onUserNameInputBlur:PropTypes.func
    }
    
}