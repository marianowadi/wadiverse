export const PlanetContent = ({ name }: { name: string }) => {
  const PLANETS_CHILDREN: Record<string, JSX.Element> = {
    'Mysel-f': (
      <>
        <p className="ml-2 mt-8 text-2xl">
          I am a former English-Spanish translator/interpreter turned developer.
          I&apos;m also curious, self-driven, and a team player who likes
          getting things done.
        </p>
        <div className="mt-4 flex justify-around">
          <a
            href="https://github.com/marianowadi"
            target="_blank"
            rel="noreferrer"
            className=" underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/marianowadijacobo/"
            target="_blank"
            rel="noreferrer"
            className=" underline"
          >
            GitHub
          </a>
        </div>
      </>
    ),
    'SK 1 LLS': (
      <>
        <p className="mt-4 text-xl">
          Frontend: <br />
          React - Next - TypeScript Material UI - Styled Components - Tailwind
          <br />
          Redux - React Query Testing Library - Jest
        </p>
        <p className="mt-4 text-xl">
          Backend: <br />
          Express - Nest - TypeScript MySQL - PostgreSQL TypeORM <br />
          Git - GitHub - GitLab - CI/CD - Jenkins - Docker
        </p>
      </>
    ),
    'EX P-3': (
      <div className="mt-4 flex flex-row flex-wrap justify-around">
        <p>
          Mission 1: ThinkUp Studios <br /> Status: Accomplished <br />
          <Chips text={['React', 'Node', 'TypeScript']} />
        </p>
        <p>
          Mission 2: Magnetico <br /> Status: Accomplished <br />
          <Chips text={['React/Next', 'Node', 'TypeScript']} />
        </p>
        <p className="mt-8">
          Mission 3: LenioLabs_ <br /> Status: Ongoing <br />
          <Chips text={['React', 'Node', 'TypeScript']} />
        </p>
      </div>
    ),
    '4 FU-n': (
      <div className="mt-4 flex flex-col">
        <p>
          This is where the fun (and head-banging-on-wall) stuff happens! <br />
          Currently building: <br />
          <a
            href="https://github.com/marianowadi/impossidraw"
            target="_blank"
            rel="noreferrer"
            className=" underline"
          >
            Impossidraw
          </a>
          <br />
          A multiplayer draw/guess game with a twist. <br />
          Built with
          <Chips text={['React', 'Node', 'TypeScript', 'Socket.io']} />
        </p>
        <p>
          <a
            href="https://github.com/marianowadi/task-heroes"
            target="_blank"
            rel="noreferrer"
            className=" underline"
          >
            Task Heroes
          </a>
          <br />
          A gamified todo app. <br />
          Built with
          <Chips text={['React', 'Node', 'TypeScript']} />
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col content-around self-start text-xl">
      {PLANETS_CHILDREN[name]}
    </div>
  )
}

const Chips = ({ text }: { text: string[] }) =>
  text.map((t, i) => (
    <span key={i} className="mx-2  rounded-md border p-1 text-sm">
      {t}
    </span>
  ))
