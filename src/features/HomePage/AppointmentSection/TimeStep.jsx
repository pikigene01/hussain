import {
  Box, chakra, Flex, Text, useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import MyButton from 'components/MyButton';
import TimePicker from './TimePicker';

export default function TimeStep({ initialValue, onBack, onSubmit }) {
  const isDatepickerInline = useBreakpointValue({ base: false, sm: true });
  const [selectedDate, setDate] = useState(initialValue ?? getDate());
  return (
    <Box py="5">
      <Text fontSize="sm" mb="5" textAlign="center">
        Below you can find a list of available time slots for&nbsp;
        <chakra.span fontWeight="600">Window Cleaning</chakra.span>
        &nbsp;by
        <br />
        The&nbsp;
        <chakra.span fontWeight="600">Page Pressure Washing Team</chakra.span>
        .
        <br />
        Click on a time slot to proceed with booking.
      </Text>
      <Flex mb="3" justifyContent="center" alignItems="center">
        <DatePicker
          calendarStartDay={1}
          filterDate={filterWorkingDay}
          inline={isDatepickerInline}
          minDate={new Date()}
          onChange={(date) => setDate(date)}
          selected={selectedDate}
        />
        <Box w="3" />
        <TimePicker
          value={initialValue?.getHours()}
          onChange={(value) => {
            selectedDate.setHours(value);
            onSubmit(selectedDate);
          }}
        />
      </Flex>
      <Text fontSize="sm" mb="3" textAlign="center">Call us for availability on weekends.</Text>
      <Box bgColor="surfaceDark" h="1px" mb="5" />
      <Flex>
        <MyButton onClick={onBack} size="sm">Back</MyButton>
      </Flex>
    </Box>
  );
}

function getDate() {
  const date = new Date();
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

function filterWorkingDay(date) {
  return date.getDay() > 0 && date.getDay() < 6;
}
