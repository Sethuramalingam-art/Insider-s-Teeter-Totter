import {v4} from 'uuid'
import {MIN_WEIGHT, MAX_WEIGHT, TEETER_TOTAL_WIDTH, TOTAL_SHAPE} from './constants'

export function getOneBlock() {
    const id = v4();
    const type = Math.floor(Math.random() * TOTAL_SHAPE);
    const weight = Math.floor(Math.random() * MAX_WEIGHT) + MIN_WEIGHT;
    const offset = Math.floor(Math.random() * TEETER_TOTAL_WIDTH / 2) + 1;
    const height = weight * 8;

    return {
        id,
        type,
        weight,
        offset,
        height
    }
}
