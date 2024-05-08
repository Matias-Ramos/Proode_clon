import Image from "next/image"
const Btns = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <button className="py-2 px-4 transition-opacity text-medium no-underline hover:opacity-80">
          Tu Proode
        </button>
      </li>
      <li>
        <button className="h-10 w-32 lg:h-12 lg:w-44 bg-cta-background text-slate-100 hover:opacity-80 font-bold py-2 px-4 rounded-full duration-200">
          Contáctanos
        </button>
      </li>
    </ul>
  )
}
export default Btns