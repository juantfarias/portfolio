package com.portfolio.backend.controller;

import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects") // A URL base para acessar os projetos
@CrossOrigin(origins = "*") // Permite que o nosso React (em outra porta) converse com o Java sem ser bloqueado
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    // Rota GET: Retorna a lista de todos os projetos cadastrados
    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // POST - Cadastra um novo projeto
    @PostMapping
    public Project createProject(@RequestBody Project project) {
        // O bibliotecário (repository) salva o projeto no banco e devolve ele com o ID gerado
        return projectRepository.save(project);
    }
}