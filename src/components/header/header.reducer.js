/**
 * Header reducer
 */

export function headerReducer(state={}, action) {
    switch (action.type) {
        case 'SET_STYLE':
            return {
                ...state, ...{
                    style: action.data
                }
            };
        case 'TOGGLE_INFO':
            return {
                ...state, ...{
                    showInfo: !state.showInfo
                }
            };
        default:
            return state;
    }
};
