package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.RAMEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface RAMRepository extends CrudRepository<RAMEntity, Long> {
    Optional<RAMEntity> findByTitle(String title);
    List<RAMEntity> findAll();
    RAMEntity findFirstByOrderByIdDesc();
}

