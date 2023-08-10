import LinkButton from '../layouts/LinkButton';

import saving from '../../img/savings.svg';
import styles from './Home.module.css';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo <span>Costs</span> </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text="Criar Projeto" />
            <img src={saving} alt="Costs" />
        </section>
    );
}

export default Home;