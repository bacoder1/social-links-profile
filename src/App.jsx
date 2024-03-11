import './App.css'

import avatar from './assets/images/avatar-jessica.jpeg'

import SocialLink from './components/SocialLink'

export default function App() {
  const name = 'Jessica Randall'
  const location = 'London, United Kingdom'
  const description = 'Front-end developer and active reader.'
  const socialLinks = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram']

  return (
    <main className="h-full flex justify-center items-center bg-neutral-off-black font-inter">

      <article className="bg-neutral-dark-grey w-article p-6 pt-[22px] rounded-xl flex flex-col items-center">
        <img className="w-[84px] rounded-full" src={avatar} alt="Profile Picture" />
        <h1 className="text-white font-semibold text-2xl leading-none mt-8 tracking-wide">
          {name}
        </h1>
        <h2 className="mt-[8px] text-primary-green font-semibold text-sm tracking-wide">
          {location}
        </h2>
        <p className="mt-6 text-white text-sm">
          "{description}"
        </p>
        <div className="mt-6 flex flex-col gap-4 w-full">
          {socialLinks.map((socialLink) => (
            <SocialLink key={socialLink} label={socialLink} />
          ))}
        </div>
      </article>
    </main>
  )
}