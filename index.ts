import {pEvent} from "p-event"
import {EventEmitter} from "node:events"

interface CustomEvents {
    custom: [string]
}

class CustomEmitter extends EventEmitter<CustomEvents> {

}

const emitter = new CustomEmitter()

const onEmitted = pEvent(emitter, 'custom')

// This type is "unknown" but it should be "string"
const emitted = await onEmitted

console.log(emitted)