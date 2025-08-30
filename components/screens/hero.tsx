import PrismaticBurst from '@/app/components/Backgrounds/PrismaticBurst/PrismaticBurst'
export default function Hero() {
  return (
    <>
      <div
        className="mx-auto overflow-hidden rounded-3xl"
        style={{
          height: '95vh',
          width: '95%',
          position: 'relative',
          border: '1px solid #392e4e',
        }}
      >
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={[
            '#0d1b2aff',
            '#1b263bff',
            '#415a77ff',
            '#6fffe9ff',
            '#c77dff',
            '#ff002fff',
            '#ffd166ff',
            '#ffffff',
          ]}
        />
      </div>
      <div className="absolute top-13 left-1/2 z-20 flex w-[90%] -translate-x-1/2 flex-col items-center">
        <header className="backdrop-blur-full flex w-[90%] max-w-5xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-5 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span
              className="font-medium tracking-tight text-white"
              style={{ letterSpacing: '0.2px' }}
            >
              Ganesh
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#"
              className="text-white transition-colors"
              style={{ fontSize: '16px', letterSpacing: '0.2px' }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-white transition-colors"
              style={{ fontSize: '16px', letterSpacing: '0.2px' }}
            >
              Work
            </a>
          </nav>
        </header>
        <div className="mt-42 flex flex-col items-center text-center">
          <button
            className="mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition"
            style={{ letterSpacing: '0.2px' }}
          >
            ✨ Grow Digitally
          </button>

          <h1 className="max-w-3xl text-4xl leading-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Ganesh Kumar <br />
            <span className="">Freelance Web Developer</span>
          </h1>

          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <a
              href="#"
              className="rounded-full bg-white px-10 py-3 font-medium text-black shadow-lg transition hover:-translate-y-1"
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded-full border border-white/30 bg-white/10 px-10 py-3 font-medium text-white backdrop-blur-md transition hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
