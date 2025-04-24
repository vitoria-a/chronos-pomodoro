import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Button } from "../Button";
import { Input } from "../Input";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;
    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Insert new task name");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form action="" className="form" onSubmit={handleCreateNewTask}>
      <div className="formRow">
        <Input
          disabled={!!state.activeTask}
          labelText="task"
          id="meuInput"
          placeholder="Insert new task"
          ref={taskNameInput}
          type="text"
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <Button
            aria-label="Start new task"
            icon={<PlayCircleIcon />}
            type="submit"
            title="Start new task"
          />
        ) : (
          <Button
            aria-label="Stop current task"
            color="red"
            icon={<StopCircleIcon />}
            type="button"
            title="Stop current task"
          />
        )}
      </div>
    </form>
  );
}
