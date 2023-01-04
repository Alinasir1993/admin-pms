import pms from './pms';
import fnb from './fnb';
import common from './common';
import restaurant from './restaurant';
import housekeeping from './housekeeping';
import store from './store';
import luggage from './luggage';
import packaging from './packaging';

export default {
    common: {
        ...common
    },
    pms: {
        ...pms
    },
    fnb: {
        ...fnb
    },
    restaurant: {
        ...restaurant
    },
    housekeeping: {
        ...housekeeping
    },
    store: {
        ...store
    },
    luggage: {
        ...luggage
    },
    packaging: {
        ...packaging
    }
}
