import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layouts/Message";
import Container from "../layouts/Container";
import Loading from "../layouts/Loading";
import LinkButton from '../layouts/LinkButton'
import ProjectCard from "../projects/ProjectCard";

import styles from './Project.module.css';

function Project() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectsMessage, setProjectsMessage] = useState('');

    const location = useLocation();
    let message = '';
    
    if (location.state) message = location.state.message;
    
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:5000/projects', {
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {;
            setProjects(data);
            setRemoveLoading(true);
        })
        .catch(err => console.log("Algo está errado: " + err));
    }, 300);
    }, []);

    function removeProject(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(() => {
            setProjects(projects.filter(project => project.id !== id))
            setProjectsMessage("Projeto removido com sucesso!");
        })
        .catch(err => console.log(err));
    }

    return(
        <div className={styles.project}>
            <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to='/newproject' text="Criar Projeto" />
            </div>
             {message && <Message type="success" msg={message} />}
             {projectsMessage && <Message type="success" msg={projectsMessage} />}
             <Container customClass='start'>
                {projects.length > 0 && projects.map((project) => <ProjectCard 
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject} />) }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
             </Container>
        </div>
    );
}

export default Project;