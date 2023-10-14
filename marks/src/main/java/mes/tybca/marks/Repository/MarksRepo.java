package mes.tybca.marks.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mes.tybca.marks.Entity.Marks;

public interface MarksRepo extends JpaRepository<Marks, Integer>{
    
}
