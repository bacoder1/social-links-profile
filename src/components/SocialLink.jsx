export default function SocialLink({ label }) {
  return (
    <a className="bg-neutral-grey text-white font-semibold text-sm tracking-wide w-full flex justify-center items-center h-[44px] rounded-lg leading-none p-4 transition-colors duration-300 hover:bg-primary-green hover:text-neutral-dark-grey" href="#">
      {label}
    </a>
  )
}