package mes.tybca.marks.Restcontroller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mes.tybca.marks.Entity.StudentDetail;
import mes.tybca.marks.Repository.StudentRepo;

@RestController
@RequestMapping("api/student")
public class Student {

    @Autowired
    StudentRepo studentRepo;

    @PostMapping(value = "saveStudent")
    public StudentDetail saveStudentDetail(@RequestBody StudentDetail entity) {

        return studentRepo.save(entity);
    }

    @GetMapping(value = "getStudentRollNo")
    public java.util.Set<String> getMethodName() {
        List<String> rollNos = new ArrayList<>();

        StudentDetail stud1 = new StudentDetail();
        StudentDetail stud2 = new StudentDetail();

        if (stud1.equals(stud2)) {
            System.out.println("Same Obj");
        } else {
            System.out.println("Different");
        }
        for (StudentDetail student : studentRepo.findAll()) {
            rollNos.add(student.getRollNo());
        }
        return studentRepo.findAll().stream().sorted((e1, e2) -> e1.getRollNo().compareToIgnoreCase(e2.getRollNo()))
                .map(e -> e.getRollNo()).collect(Collectors.toSet());
        // return rollNos;
    }

    @GetMapping(value = "getAll")
    public List<StudentDetail> getAll() {
        return studentRepo.findAll();
    }

}
