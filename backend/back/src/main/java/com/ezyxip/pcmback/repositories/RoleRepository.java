package com.ezyxip.pcmback.repositories;
import java.util.Optional;

import com.ezyxip.pcmback.entities.User.ERole;
import com.ezyxip.pcmback.entities.User.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}