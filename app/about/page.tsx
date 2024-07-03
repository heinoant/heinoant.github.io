export default function About() {
  return (
    <main className="flex flex-col md:basis-1/3 md:items-center md:text-2xl justify-center px-10">
      <div className="md:text-base max-h-[38rem] text-clip overflow-y-auto">
        i&apos;m a web developer based in turku, finland. i specialize in{' '}
        <b>front-end</b> development, but i&apos;m also interested in ui/ux
        design. i have experience with <b>vue.js</b>, <b>react</b>,{' '}
        <b>react native</b> and some back-end experience with django, laravel,
        and node.js. i&apos;m currently working with <b>next.js</b>,{' '}
        <b>tailwindcss</b>, and <b>typescript</b>.
      </div>
      <div className="md:text-base max-h-[38rem] overflow-y-auto pt-8">
        in the free time i like to go to the gym, play disc golf and watch
        movies.
      </div>
    </main>
  );
}
