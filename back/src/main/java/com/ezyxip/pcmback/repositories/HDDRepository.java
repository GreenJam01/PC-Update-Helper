package com.ezyxip.pcmback.repositories;

import com.ezyxip.pcmback.entities.CPUEntity;
import com.ezyxip.pcmback.entities.GPUEntity;
import com.ezyxip.pcmback.entities.HDDEntity;
import com.ezyxip.pcmback.entities.MotherboardEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HDDRepository extends CrudRepository<HDDEntity, Long> {
    List<HDDEntity> findAll();
    HDDEntity findFirstByOrderByIdDesc();

}

