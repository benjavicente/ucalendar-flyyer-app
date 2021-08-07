import React from 'react';
import {Course} from '../lib/types';
import ScheduleTable from './schedule';

function Logo() {
  return (
    <h1 className="logo">
      <span className="highlight">UC</span>alendar
    </h1>
  );
}

type CardElements = {schedule: Course[]; width: number; height: number};
export default function Card({schedule, width, height}: CardElements) {
  // Information about the image size in the root element
  document.querySelector('#root')?.classList.add(`size_${width}_${height}`);
  const has_courses = schedule.length > 0;
  return (
    <div className={`schedule-section ${has_courses ? '' : 'empty'}`}>
      <div className="schedule-card">
        <Logo />
        {has_courses ? <ScheduleTable schedule={schedule} /> : null}
      </div>
    </div>
  );
}
