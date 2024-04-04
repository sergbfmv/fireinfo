import MainInfo from "../../components/mainInfo/mainInfo";
import {HeadMeta} from "../../components/headMeta/headMeta";
import s from '../styles/mainBlock.module.css'
import MapComponent from "../../components/map/map";


export default function Home() {
  return (
    <>
      <HeadMeta />
      <main className={s.main}>
          <div className={s.container}>
              <header>
                  logo + login
              </header>
              <MainInfo/>
          </div>
      </main>
    </>
  );
}
