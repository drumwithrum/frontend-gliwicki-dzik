import React, { FC, useState } from 'react';
import ExcercisesList from './ExcercisesList';
import { connect } from 'react-redux';
import { getExcercisesList, getWorkouts } from 'store/excercises/selectors';
import { addWorkout } from 'store/excercises/actions';
import { Input, Table } from 'components';
import { Wrapper, ListWrapper, Title, Button, Body, Footer } from './WorkoutsMenu.style';

interface PassedProps {
}

interface WorkoutsMenuProps extends PassedProps{
  workouts: any[];
  excercises?: any[];
  trainingPlan?: any[];
  addWorkout: typeof addWorkout;
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
  wednesday: {
    title: 'Środa',
    itemIds: [
      '5',
      '6',
    ],
  },
  thursday: {
    title: 'Czwartek',
    itemIds: [],
  },
  friday: {
    title: 'Piątek',
    itemIds: [],
  },
  saturday: {
    title: 'Sobota',
    itemIds: [],
  },
  sunday: {
    title: 'Niedziela',
    itemIds: [],
  },
};

const WorkoutsMenu: FC<WorkoutsMenuProps> = ({
  workouts = [],
  excercises = [],
  addWorkout,
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

  const onWorkoutAdd = async () => {
    const data = {
      name: workoutTitle,
      exercises: workoutExcercises
        .map((item: { id: string }) => ({ exerciseId: item.id, reps: 1, sets: 1 })),
    };
    await addWorkout(data);
    setAddingWorkout(false);
  };

  const handleTitleChange = (value: string) => setWorkoutTitle(value);

  if (!workouts.length && !(isAddingWorkout || isAddingTrainingPlan)) {
    return (
      <Wrapper flex="column" justify="center">
        <Title>
          Nie utworzyłeś jeszcze żadnego treningu, kliknij w przycisk aby go utworzyć
        </Title>
        <Button onClick={() => setAddingWorkout(true)}>
          Zapisz
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
          <Button onClick={() => onWorkoutAdd()}>Zapisz</Button>
        </Footer>
      </Wrapper>
    );
  }

  return (
    <Wrapper flex="column">
      <Body>
        <ListWrapper>
          <ExcercisesList
            onNewAdd={() => setAddingWorkout(true)}
            data={workouts}
            onClick={addExcerciseToTraining}
            searchPlaceholder="Wyszukaj trening"
          />
        </ListWrapper>
        <div>
          <Title size={24}>
            Twój plan treningowy!
          </Title>
          <Table columns={columns} />
        </div>
      </Body>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  excercises: getExcercisesList(state),
  workouts: getWorkouts(state),
});

const mapDispatchToProps = {
  addWorkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsMenu);
