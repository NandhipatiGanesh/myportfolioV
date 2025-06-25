import React from 'react'

const AboutSection: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('you@example.com')
    alert('Email copied to clipboard')
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-black">
      <p className="mb-8 text-xl leading-relaxed">
        Freelance senior product and website designer with over 11 years of
        experience. Based in Copenhagen. Available for remote-friendly freelance
        work.
      </p>

      <p className="mb-4 text-xl leading-relaxed">
        Most recently at Denmark’s newest unicorn,{' '}
        <span className="font-semibold underline decoration-gray-300 underline-offset-4">
          Pleo
        </span>
        .
      </p>
      <p className="mb-4 text-xl leading-relaxed">
        Previously, at{' '}
        <span className="font-semibold underline decoration-gray-300 underline-offset-4">
          Monzo
        </span>{' '}
        — the fastest growing bank in the UK.
      </p>
      <p className="mb-8 text-xl leading-relaxed">
        Before that, the first design hire at{' '}
        <span className="font-semibold underline decoration-gray-300 underline-offset-4">
          Thriva
        </span>
        .
      </p>

      <div className="flex gap-4">
        <a
          href="mailto:you@example.com"
          className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Email me →
        </a>
        <button
          onClick={handleCopy}
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
        >
          Copy email
        </button>
      </div>
    </section>
  )
}

export default AboutSection
