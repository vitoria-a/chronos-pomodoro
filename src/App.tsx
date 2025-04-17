import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";
import { Button } from "./components/Button";
import { PlayCircleIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input
              id="input"
              labelText="Task"
              placeholder="Insert new task"
              type="text"
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolors sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <Button icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
    </>
  );
}
