package mes.tybca.marks.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mes.tybca.marks.Entity.StudentDetail;

public interface StudentRepo extends JpaRepository<StudentDetail, Integer>{
    
}
