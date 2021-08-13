import React from 'react';

import {Variable as V, Validator, Static} from '@flyyer/variables';
import {TemplateProps} from '@flyyer/types';

import '../static/style.scss';
import Card from '../components/card';
import {Course} from '../lib/types';

const schedule_schema = V.Object({
  c: V.String(),
  d: V.Integer(),
  m: V.Integer()
});

const course_schema = V.Object({
  c: V.String(),
  _: V.Array(schedule_schema, {default: []})
});

export const schema = V.Object({
  _: V.Array(course_schema, {default: []})
});

type Variables = Static<typeof schema>;

function load_data_of_minified_schema(data: Variables): Course[] {
  return data._.map((min_course) => ({
    code: min_course.c,
    schedule: min_course._.map((min_schedule_item) => ({
      category: min_schedule_item.c,
      day: min_schedule_item.d,
      module: min_schedule_item.m
    }))
  }));
}

const validator = new Validator(schema);
export default function MainTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables} = props;
  const {data, isValid, errors} = validator.parse(variables);

  if (!isValid) {
    console.error('[Flyyer Variables]:', errors);
  }

  const courses = load_data_of_minified_schema(data);
  return <Card courses={courses} height={height} width={width} />;
}
