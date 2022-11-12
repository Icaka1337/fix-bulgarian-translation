import { createPlugin } from '@fullcalendar/core/internal'
import { eventSourceDef } from './event-source-def.js'
import { OPTION_REFINERS } from './options-refiners.js'
import { EVENT_SOURCE_REFINERS } from './event-source-refiners.js'
import './augment.js'

export default createPlugin({
  name: '<%= pkgName %>',
  eventSourceDefs: [eventSourceDef],
  optionRefiners: OPTION_REFINERS,
  eventSourceRefiners: EVENT_SOURCE_REFINERS,
})
