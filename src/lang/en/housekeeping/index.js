import assignRooms from './assign-rooms.json'
import assignedRooms from './assigned-rooms.json'
import scheduling from './scheduling.json'
import cleanTypes from './clean-types.json'
import outOfOrderRooms from './out-of-order-rooms.json'
import missingItems from './missing-items.json'
import onBreakStaffs from './on-break-staffs.json'


export default {
    assignRooms: {
        ...assignRooms,
    },
    assignedRooms: {
        ...assignedRooms,
    },
    scheduling: {
        ...scheduling
    },
    cleanTypes: {
        ...cleanTypes
    },
    outOfOrderRooms: {
        ...outOfOrderRooms
    },
    missingItems: {
        ...missingItems
    },
    onBreakStaffs: {
        ...onBreakStaffs
    }
}