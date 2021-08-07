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
  const has_courses = schedule.length > 0;
  return (
    <div className={`fill ${`size_${width}_${height}`}`}>
      <div className={`fill schedule-section ${has_courses ? '' : 'empty'}`}>
        <div className="schedule-card">
          <Logo />
          {has_courses ? <ScheduleTable schedule={schedule} /> : null}
        </div>
      </div>
    </div>
  );
}
