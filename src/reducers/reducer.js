export const INIT_COMMENTS = Symbol.for("init");
export const ADD_COMMENTS = Symbol.for("add");
export const DELETE_COMMENTS = Symbol.for("delete");

export default function(state,action){
	if(!state){
		state = {comments:[]}
	}
	switch(action.type){
		case INIT_COMMENTS:
		//初始化评论
		return {
			comments:[action.text]
		}
		case ADD_COMMENTS:
		//增加评论
		return {
			comments:[...state.comments,action.text]
		}
		case DELETE_COMMENTS:
		//删除评论
		return {
			comments:[...state.comments.slice(0,action.text),...state.comments.slice(action.text+1)]
		}
		default: return state;
	}
}
//action creator
export const initComments = (comments)=>{
	return {type:INIT_COMMENTS,text:comments}
}
export const addComments = (comments)=>{
	return {type:ADD_COMMENTS,text:comments}
}
export const deleteComments = (index)=>{
	return {type:DELETE_COMMENTS,text:index}
}