package mes.tybca.marks.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping(value = "student_detail")
    public String studentDetails() {
        return "student_detail";
    }
    @GetMapping(value = "getstudentdetail")
    public String getstudentdetail() {
        return "getstudentdetail";
    }
    @GetMapping(value = "student_marks")
    public String student_marks() {
        return "student_marks";
    }
    @GetMapping(value = "getmarks")
    public String getmarks() {
        return "getmarks";
    }

}
