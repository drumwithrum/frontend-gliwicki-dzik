import React, { FC, useState } from 'react';
import ExcercisesList from './ExcercisesList';
import { Input, Table } from 'components';
import { Wrapper, ListWrapper, Title, Button, Body, Footer } from './WorkoutsMenu.style';

interface WorkoutsMenuProps {
  workouts?: any[];
  trainingPlan?: any[];
}

const columns = {
  monday: {
    title: 'Poniedziałek',
    itemIds: [
      '1',
      '2',
    ],
  },
  tuesday: {
    title: 'Wtorek',
    itemIds: [
      '3',
      '4',
    ],
  },
};

const excercises = [{
  id: '1',
  title: 'Wyciskanie',
}, {
  id: '2',
  title: 'jebanie',
}];

const WorkoutsMenu: FC<WorkoutsMenuProps> = ({
  workouts = [],
}) => {
  const [isAddingWorkout, setAddingWorkout] = useState(false);
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [isAddingTrainingPlan, setAddingTrainingPlan] = useState(false);
  const [workoutExcercises, setWorkoutExcercises] = useState([]);

  const addExcerciseToTraining = (excerciseId: string) => {
    const excercise = excercises.find((item) => item.id === excerciseId)!;
    const newExcercises = [
      ...workoutExcercises,
      excercise,
    ] as any;
    setWorkoutExcercises(newExcercises);
  };

  const handleTitleChange = (value: string) => setWorkoutTitle(value);

  if (!workouts.length && !(isAddingWorkout || isAddingTrainingPlan)) {
    return (
      <Wrapper flex="column" justify="center">
        <Title>
          Nie utworzyłeś jeszcze żadnego treningu, kliknij w przycisk obok aby go utworzyć
        </Title>
        <Button onClick={() => setAddingWorkout(true)}>
          Dodaj trening
        </Button>
      </Wrapper>
    );
  }

  if (isAddingWorkout) {
    return (
      <Wrapper align="flex-start" flex="column" justify="space-between">
        <Title>
          Kliknij w ćwiczenie po lewej stronie aby dodać je do treningu
        </Title>
        <Body>
          <ListWrapper>
            <ExcercisesList data={excercises} onClick={addExcerciseToTraining} searchPlaceholder="Wyszukaj ćwiczenie" />
          </ListWrapper>
          <ListWrapper>
            <Input name="workout" onChange={handleTitleChange} value={workoutTitle} placeholder="Nazwa treningu" />
            <ExcercisesList
              data={workoutExcercises}
              disableSearch
              isAddingTraining={isAddingWorkout}
            />
          </ListWrapper>
        </Body>
        <Footer>
          <Button>Zapisz</Button>
        </Footer>
      </Wrapper>
    );
  }

  return (
    <Wrapper flex="column">
      <Title size={24}>
        Twój plan treningowy!
      </Title>
      <Body>
        <ListWrapper>
          <ExcercisesList data={workouts} onClick={addExcerciseToTraining} searchPlaceholder="Wyszukaj trening" />
        </ListWrapper>
        <Table columns={columns} />
      </Body>
    </Wrapper>
  );
};

export default WorkoutsMenu;
