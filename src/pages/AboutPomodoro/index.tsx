import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>The Pomodoro Technique 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity methodology created by{" "}
            <strong>Francesco Cirillo</strong>, which consists of dividing the
            work in blocks of time (the famous "Pomodoros") interspersed with
            pauses. The goal is to maintain full focus for a short period of
            time and ensure rests to avoid mental fatigue.
          </p>

          <img src="https://placehold.co/1920x1080" alt="" />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Define a task</strong> you want to accomplish.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. Every 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>
            But in <strong>the Chronos Pomodoro</strong> there is a differential
            🚀
          </h2>

          <p>
            Our app follows the original concept, but with some improvements and
            Customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can set up focus time, short rest, and rest long just the way
            you want! Just go to <a href="/settings">settings page</a> and
            adjust the minutes as you prefer.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            With each completed cycle, a new task is automatically added to your
            history, and the app already suggests the next cycle (focus or
            rest).
          </p>
          <p>
            <strong>Our Standard:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd cycles</strong>: Work (focus).
            </li>
            <li>
              Even <strong>cycles</strong>: Short rest.
            </li>
            <li>
              Cycle <strong>8</strong>: Special long rest, to reset the complete
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Just below the timer, you'll see colored polka dots Representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Duty cycle (focus).</li>
            <li>🟢 Green: Short rest.</li>
            <li>🔵 Blue: Long rest (appears every 8 cycles).</li>
          </ul>

          <p>
            That way, you always know where you are in the process and what
            comes next follow. No more writing down on paper or calculating in a
            head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed tasks and cycles are saved in{" "}
            <a href="/history">historic</a>, with a status of complete or
            Interrupted. This way, you can follow your evolution throughout of
            time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus clearly.</li>
            <li>✅ Work and rest in the right measure.</li>
            <li>✅ Customize your own cycles and timings.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let's go{" "}
            <a href="/">back to the homepage</a> and start your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Total focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
