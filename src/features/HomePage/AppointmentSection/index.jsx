import {
  Box, chakra, Flex, Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import Container from 'components/Container';
import MyButton from 'components/MyButton';
import * as repository from 'services/repository';
import DetailStep from './DetailStep';
import DoneStep from './DoneStep';
import ServiceStep from './ServiceStep';
import TimeStep from './TimeStep';

export default function AppointmentSection() {
  return (
    <chakra.section px="5" py="16">
      <Container>
        <AppointmentWizard />
      </Container>
    </chakra.section>
  );
}

function AppointmentWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <Box
      bgColor="background"
      boxShadow="rgba(0, 0, 0, 0.3) 0px 3px 18px -6px"
      mx="auto"
      p={{ base: '5', sm: '12' }}
      w={{ md: '600px' }}
    >
      <Text
        color="secondary"
        fontSize={{ base: '2xl', sm: '3xl' }}
        fontWeight="600"
        mb="7"
        textAlign="center"
      >
        Set an Appointment
      </Text>
      <Flex mx="-1" alignItems="flex-end">
        {['Service', 'Time', 'Details', 'Done'].map((step, index) => (
          <Box w="25%" px="1">
            <Text fontSize="sm" fontWeight="600" mb="1">{`${index + 1}. ${step}`}</Text>
            <Box bgColor={stepIndex === index ? 'secondary' : 'surfaceDark'} h="13px" />
          </Box>
        ))}
      </Flex>
      <Box borderColor="surfaceDark">
        {(() => {
          switch (stepIndex) {
            case 0:
              return (
                <ServiceStep
                  initialValue={formData.service}
                  onSubmit={async (value) => {
                    setFormData({ ...formData, service: value });
                    await repository.getAppointments();
                    setStepIndex(stepIndex + 1);
                  }}
                />
              );
            case 1:
              return (
                <TimeStep
                  initialValue={formData.time ? new Date(formData.time * 1000) : null}
                  onSubmit={(value) => {
                    setFormData({ ...formData, time: Math.floor(value.getTime() / 1000) });
                    setStepIndex(stepIndex + 1);
                  }}
                  onBack={() => setStepIndex(stepIndex - 1)}
                />
              );
            case 2:
              return (
                <DetailStep
                  date={new Date(formData.time * 1000)}
                  onBack={() => setStepIndex(stepIndex - 1)}
                  onSubmit={async (value) => {
                    setFormData({ ...formData, ...value });
                    await repository.createAppointment({ ...formData, ...value });
                    setStepIndex(stepIndex + 1);
                  }}
                />
              );
            case 3:
              return (<DoneStep />);
            default:
              return null;
          }
        })()}
      </Box>
    </Box>
  );
}
