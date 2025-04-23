import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Button } from "../Button";
import { Input } from "../Input";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <Input
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
