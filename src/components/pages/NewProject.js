import { useNavigate } from 'react-router-dom';

import ProjectForm from '../projects/ProjectForm';

import styles from './NewProject.module.css';

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        // Initialize cost and services
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  // Corrigido "Content Type" para "Content-Type"
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then(data => {
                // console.log(data);
                // Redirect
                navigate('/project', { state: { message: 'Projeto criado com sucesso' } })
            })
            .catch(err => console.log(err));

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os seus serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
        </div>
    );
}

export default NewProject;