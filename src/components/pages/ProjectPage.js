import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from '../layouts/Container'
import Loading from '../layouts/Loading'
import ProjectForm from '../projects/ProjectForm';
import Message from '../layouts/Message';
import ServiceForm from '../service/ServiceForm';

import styles from './ProjectPage.module.css';

function ProjectPage() {
    const { id } = useParams();

    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setServiceForm] = useState(false);

    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setProject(data);
            })
            .catch(err => console.log(err));
    }, [id]);

    function editPost(project) {
        setMessage('');
        if (project.budget < project.cost) {
            setMessage("O orçamento não pode ser menor que o custo do projeto!");
            setType('error');
            return false;
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then(data => {
                setProject(data);
                setShowProjectForm(false);
                setMessage("Projeto atualizado!");
                setType('success');
            })
            .catch(err => console.error(err));
    }

    function createService(project) {
        setMessage("");
        // last service 
        const lastService = project.services[project.services.length - 1];

        lastService.id = uuidv4;

        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        // maximum value validation
        if (newCost > parseFloat(project.budget)) {
            setMessage("Orçamento ultrapassado, verifique o valor do serviço");
            setType("error");
            project.services.pop();

            return false;
        }

        // add  service cost to project total cost
        project.cost = newCost;

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "applicaiton/json"
            },
            body: JSON.stringify()
        })
        .then(resp => resp.json())
        .then(data => {
            // show the services
            console.log(data);
        })
        .catch(err => console.log(err));

    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toggleServiceForm() {
        setServiceForm(!showServiceForm);
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span>{project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de orçamento: </span>R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span>R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Salvar"
                                        projectDate={project} />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_container}>
                            <h2>Adicione um serviço</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <ServiceForm 
                                    handleSubmit={createService}
                                    btnText="Adicionar serviço"
                                    projectDate={project} />
                                ) }
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start" >
                                <p>Items de Serviço</p>
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default ProjectPage;