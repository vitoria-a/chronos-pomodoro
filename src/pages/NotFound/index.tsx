import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>Error 404 - Page Not Found 🚀</Heading>
          <p>
            Whoops! It looks like the page you're trying to access doesn't
            exist. Maybe she took a vacation, decided to explore the universe,
            or lost somewhere between two black holes. 🌌
          </p>
          <p>
            But calm down, you're not lost in space (yet). You can come back in
            security for the <a href="/">main page</a> or{" "}
            <a href="/history">for history</a> — or you can stop here and
            pretend that you have found a secret page that only the most can
            access. 🧭✨
          </p>
          <p>
            If you think this page should exist (or if you want to hit a talk
            about time travel and wormholes), just enter contact. Otherwise, use
            the menu to go back to the real world.
          </p>
          <p>
            In the meantime, here is a reflection: "If a page does not exist in
            the internet, did it really exist?" 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
