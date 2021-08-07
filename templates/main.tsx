import React from 'react';

import {Variable as V, Validator, Static} from '@flyyer/variables';
import {TemplateProps} from '@flyyer/types';

import '../static/style.scss';
import Card from '../components/card';

const module_schema = V.Object({
  category: V.String(),
  day: V.Integer(),
  module: V.Integer()
});

const course_schema = V.Object({
  code: V.String(),
  modules: V.Array(module_schema)
});

export const schema = V.Object({
  schedule: V.Array(course_schema, {default: []})
});

type Variables = Static<typeof schema>;
const validator = new Validator(schema);
export default function MainTemplate(props: TemplateProps<Variables>) {
  const {width, height, variables} = props;
  const {
    data: {schedule},
    isValid,
    errors
  } = validator.parse(variables);

  if (!isValid) {
    console.error('[Flyyer Variables]:', errors);
  }

  return <Card schedule={schedule} height={height} width={width} />;
}
