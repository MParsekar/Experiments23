package mes.erp.RestController;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mes.erp.DTO.AttendanceRequest;
import mes.erp.DTO.AttendanceResponse;
import mes.erp.Service.AttendanceService;

@RestController
@RequestMapping("api/attendance")
public class AttendanceAPI {

   @Autowired
   AttendanceService  service;

    @PostMapping("takeAttendace")
    public AttendanceResponse takeAttendace(@RequestBody AttendanceRequest request, HttpServletRequest servletRequest) {
        return service.takeAttendace(request, servletRequest.getRemoteAddr());
    }

    @GetMapping(value="getTodaysattendance")
    public List<AttendanceResponse>  getTodaysattendance() {
        return service.getAllAtendaceForToday();
    }
    
}
