package mes.tybca.marks.Restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mes.tybca.marks.Entity.Marks;
import mes.tybca.marks.Repository.MarksRepo;


@RestController
@RequestMapping("api/marks")
public class MarksApi {
    @Autowired
    MarksRepo marksRepo;

    @PostMapping(value = "save")
    public Marks postMethodName(@RequestBody Marks entity) {
        return marksRepo.save(entity);
    }

    @GetMapping(value="getAll")
    public List<Marks> getMethodName() {
        return marksRepo.findAll();
    }
    
}
