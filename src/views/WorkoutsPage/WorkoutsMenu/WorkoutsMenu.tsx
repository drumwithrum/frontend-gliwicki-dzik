import React, { FC, useState } from 'react';
import ExcercisesList from './ExcercisesList';
import { connect } from 'react-redux';
import { getExcercisesList, getWorkouts } from 'store/excercises/selectors';
import { getColums } from 'store/ui/selectors';
import { addWorkout, fetchAllWorkouts } from 'store/excercises/actions';
import { updateTableColumns, addTrainingToTable } from 'store/ui/actions';
import { Input, Table } from 'components';
import { Wrapper, ListWrapper, Title, Button, Body, Footer } from './WorkoutsMenu.style';

interface PassedProps {
}

interface WorkoutsMenuProps extends PassedProps{
  workouts: any[];
  columns: any;
  excercises?: any[];
  trainingPlan?: any[];
  addWorkout: typeof addWorkout;
  updateTableColumns: typeof updateTableColumns;
  addTrainingToTable: typeof addTrainingToTable;
  fetchAllWorkouts: typeof fetchAllWorkouts;
}

const WorkoutsMenu: FC<WorkoutsMenuProps> = ({
  workouts = [],
  excercises = [],
  addWorkout,
  columns,
  updateTableColumns,
  addTrainingToTable,
  fetchAllWorkouts,
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

  const removeExcerciseFromTraining = (excerciseId: string) => {
    const newExcercises = workoutExcercises.filter((item: { id: string }) => item.id !== excerciseId) as any;
    setWorkoutExcercises(newExcercises);
  };

  const onWorkoutAdd = async () => {
    const data = {
      name: workoutTitle,
      exercises: workoutExcercises
        .map((item: { id: string }) => ({ exerciseId: item.id, reps: 1, sets: 1 })),
    };
    await addWorkout(data);
    await fetchAllWorkouts();
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
              onClick={removeExcerciseFromTraining}
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
            onClick={addTrainingToTable}
            searchPlaceholder="Wyszukaj trening"
          />
        </ListWrapper>
        <div>
          <Title size={24}>
            Twój plan treningowy!
          </Title>
          <Table columns={columns} onChange={updateTableColumns} items={workouts} />
        </div>
      </Body>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  excercises: getExcercisesList(state),
  workouts: getWorkouts(state),
  columns: getColums(state),
});

const mapDispatchToProps = {
  addWorkout,
  updateTableColumns,
  addTrainingToTable,
  fetchAllWorkouts,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsMenu);
