import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { useRef } from "react";

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = longBreakTimeInput.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
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
            />
          </div>
          <div className="formRow">
            <Input
              defaultValue={state.config.shortBreakTime}
              labelText="Short rest"
              id="shortBreakTime"
              ref={shortBreakTimeInput}
            />
          </div>
          <div className="formRow">
            <Input
              defaultValue={state.config.longBreakTime}
              labelText="Long rest"
              id="longBreakTime"
              ref={longBreakTimeInput}
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
