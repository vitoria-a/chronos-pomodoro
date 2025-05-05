import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function Settings() {
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
        <form action="" className="form">
          <div className="formRow">
            <Input id="workTime" labelText="Focus" />
          </div>
          <div className="formRow">
            <Input id="shortBreakTime" labelText="Short rest" />
          </div>
          <div className="formRow">
            <Input id="longBreakTime" labelText="Long rest" />
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
