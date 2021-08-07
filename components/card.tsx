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

type CardElements = {courses: Course[]; width: number; height: number};
export default function Card({courses, width, height}: CardElements) {
  const has_courses = courses.length > 0;
  return (
    <div className={`full ${`size_${width}_${height}`}`}>
      <div className={`fill schedule-section ${has_courses ? '' : 'empty'}`}>
        <div className="schedule-card">
          <Logo />
          {has_courses ? <ScheduleTable courses={courses} /> : null}
        </div>
      </div>
    </div>
  );
}
