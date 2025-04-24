import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: "Focus",
    longBreakTime: "Fast rest",
    shortBreakTime: "Long rest",
  };

  return (
    <div className={styles.cycles}>
      <span>Cycles: </span>
      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              aria-label={`${cycleDescriptionMap[nextCycleType]} Cycle indicator`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              key={nextCycle}
              title={`${cycleDescriptionMap[nextCycleType]} Cycle indicator`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
