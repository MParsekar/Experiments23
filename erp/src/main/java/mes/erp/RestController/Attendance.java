package mes.erp.RestController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mes.erp.DTO.AttendanceRequest;

@RestController
@RequestMapping("api/attendance")
public class Attendance {
    @PostMapping("takeAttendace")
    public void takeAttendace(@RequestBody AttendanceRequest request) {
        System.out.println(request);
    }
}
