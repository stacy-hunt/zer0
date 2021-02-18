import artworkService from '../services/artwork'

export const initializeArtwork = () => {
    return async dispatch => {
        const artwork = await artworkService.getAll()
        dispatch({
            type: 'INIT_ARTWORK',
            data: artwork,
        })
    }
}

const artworkReducer = (state = [], action) => {
    switch (action.type) {
    case 'INIT_ARTWORK':
        return action.data
    default:
        return state
    }
}

export default artworkReducer