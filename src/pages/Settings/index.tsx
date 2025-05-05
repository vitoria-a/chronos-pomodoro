import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { useEffect, useRef } from "react";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Settings - Chronos Pomodoro";
  }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Insert only numbers for ALL fields");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Insert values between 1 and 99 for focus");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Insert values between 1 and 30 for short rest");
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Insert values between 1 and 60 for long rest");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success("Saved settings");
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Settings</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modify settings for focus time, stroke rest and long rest.
        </p>
      </Container>

      <Container>
        <form action="" className="form" onSubmit={handleSaveSettings}>
          <div className="formRow">
            <Input
              defaultValue={state.config.workTime}
              labelText="Focus"
              id="workTime"
              ref={workTimeInput}
              type="number"
            />
          </div>
          <div className="formRow">
            <Input
              defaultValue={state.config.shortBreakTime}
              labelText="Short rest"
              id="shortBreakTime"
              ref={shortBreakTimeInput}
              type="number"
            />
          </div>
          <div className="formRow">
            <Input
              defaultValue={state.config.longBreakTime}
              labelText="Long rest"
              id="longBreakTime"
              ref={longBreakTimeInput}
              type="number"
            />
          </div>
          <div className="formRow">
            <Button
              icon={<SaveIcon />}
              aria-label="Save settings"
              title="Save settings"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
