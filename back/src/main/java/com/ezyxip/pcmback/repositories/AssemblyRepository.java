package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.AssemblyEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface AssemblyRepository extends CrudRepository<AssemblyEntity, Long> {
    List<AssemblyEntity> findAll();
    AssemblyEntity findFirstByOrderByIdDesc();
}
