package mes.erp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import mes.erp.Entity.Attendance;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
    // You can define custom query methods here if needed
    List<Attendance> findByRollNoAndDate(String rollNo, String date);

    List<Attendance> findByIpAndDate(String ip, String date);

    List<Attendance> findByDateOrderByDateAscRollNoAsc(String date);

    // @Query("SELECT s FROM Student s ORDER BY s.date ASC, s.rollNo ASC")
    // List<Attendance> findAllOrderByDateAscRollNoAsc();
}
