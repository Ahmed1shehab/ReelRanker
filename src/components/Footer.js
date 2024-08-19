import { Link } from "react-router-dom"
export const  Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/ahmed_shehabb_/?igsh=cGo5czhocDdwN3hj&utm_source=qr" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQExs-tPMFQuAwAAAZFraKm4ebBIZvzUOyL0PMB1Knu2fAnlv16TqiNE7iJxQhIK3Bg18Jvawc8sLndStbhc8lMuY-SLViHoEn3TZZQ6phUmyhAC0F2qNMZzbksEsZZ2JWRpGZk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fahmed-shehab-6767652b3%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://www.youtube.com/@ahmedshehabMyu" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
        </li>
        <li>
            <a href="https://github.com/Ahmed1shehab" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
        </li>
    </ul>
    </footer>

  )
}
