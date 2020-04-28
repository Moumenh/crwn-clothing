import sections from '../../section';

const INTIAL_STATE = {
    sections : sections

}

const directoryReducer = (state=INTIAL_STATE,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;