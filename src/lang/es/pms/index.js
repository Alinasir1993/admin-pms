import amenities from './amenities.json'
import room_types from './room-types.json'

export default {
    amenities: {
        ...amenities,
    },
    room_types: {
        ...room_types
    }
}