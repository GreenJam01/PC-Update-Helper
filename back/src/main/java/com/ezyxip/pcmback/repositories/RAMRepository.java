package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.CPUEntity;
import com.ezyxip.pcmback.entities.GPUEntity;
import com.ezyxip.pcmback.entities.MotherboardEntity;
import com.ezyxip.pcmback.entities.RAMEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RAMRepository extends CrudRepository<RAMEntity, Long> {
    List<RAMEntity> findAll();
    RAMEntity findFirstByOrderByIdDesc();
}

