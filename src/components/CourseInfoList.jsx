import React from 'react'
import { CalendarCheck, Clock8, Hourglass, MapPin } from 'lucide-react'

// Location / time / days / length rows, shared by the course slider and the course detail page.
const CourseInfoList = ({ location, time, days, duration }) => {
  const rows = [
    { Icon: MapPin, label: 'Location', value: location },
    { Icon: Clock8, label: 'Start & Stop Time', value: time },
    { Icon: CalendarCheck, label: 'Class Days', value: days },
    { Icon: Hourglass, label: 'Duration', value: duration },
  ]

  return (
    <dl className="divide-y divide-gray-100 text-sm sm:text-base">
      {rows.map(({ Icon, label, value }) => (
        <div key={label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 py-3">
          <dt className="text-gray-500 flex items-center gap-2 shrink-0">
            <Icon size={18} className="text-purple-500 shrink-0" /> {label}
          </dt>
          <dd className="text-gray-800 font-medium pl-7 sm:pl-0 sm:text-right">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default CourseInfoList
