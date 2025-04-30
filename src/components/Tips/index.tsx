import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Focus for {state.config.workTime} minutes</span>,
    shortBreakTime: <span>Rest for {state.config.shortBreakTime} minutes</span>,
    longBreakTime: <span>Long rest</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Next cycle is <b>{state.config.workTime} minutes</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Next rest is <b>{state.config.shortBreakTime} minutes</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Next <b>rest will be long</b>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
