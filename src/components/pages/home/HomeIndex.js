import styles from './Home.module.css';
import LinkButton from '../../layout/linkButton/LinkButton';

import savings from '../../../img/savings.svg';

function Home(){
  return (
    <section className={styles.home_container}>
      <h1>Wellcome to <span>COST</span></h1>
      <p>Start manger your projects now</p>
      <LinkButton to="/newProject" text="New Project" />
      <img src={savings} alt="costs" />
    </section>
  );
}

export default Home;