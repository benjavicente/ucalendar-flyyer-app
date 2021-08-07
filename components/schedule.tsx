import React from 'react';
import {Course} from '../lib/types';
import {range} from '../lib/helpers';

const days_letters = ['L', 'M', 'W', 'J', 'V', 'S'];

export default function ScheduleTable({schedule}: {schedule: Course[]}) {
  return (
    <table>
      <thead>
        <tr>
          <td className="mod" />
          {days_letters.map((d) => (
            <td key={d}>{d}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {range(1, 8).map((mod, i_mod) => (
          <tr key={mod}>
            <td className="mod">{mod}</td>
            {days_letters.map((day, i_day) => (
              <td key={day}>
                {schedule.map((course) =>
                  course.modules.map((event) =>
                    i_mod === event.module && i_day === event.day ? (
                      <div className={event.category}>{course.code}</div>
                    ) : null
                  )
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
