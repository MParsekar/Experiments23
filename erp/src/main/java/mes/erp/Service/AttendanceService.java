package mes.erp.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mes.erp.DTO.AttendanceRequest;
import mes.erp.DTO.AttendanceResponse;
import mes.erp.Entity.Attendance;
import mes.erp.Repository.AttendanceRepository;

@Service
public class AttendanceService {
    @Autowired
    AttendanceRepository attendanceRepo;

    public AttendanceResponse takeAttendace(AttendanceRequest request, String ip) {
        // map
        AttendanceResponse response = new AttendanceResponse();
        try {

            String formattedDate = getFormattedDate();

            // Print the formatted date
            Attendance attendance = new Attendance();
            attendance.setAttendace(request.getAttendace());
            attendance.setMarks(request.getMarks());
            attendance.setRollNo(request.getRollNo());
            attendance.setDate(formattedDate);
            attendance.setIp(ip);
            // check
            List<Attendance> attendancePresent = getByIp("0");
            if (attendancePresent.size() == 0) {
                attendancePresent = getAttendanceByRollAndDate(request.getRollNo(), formattedDate);
                if (attendancePresent.size() > 0) {
                    response.setErrorMessage("Attendance Already Logged");
                    Attendance attendancePresentObj = attendancePresent.get(0);
                    mapAttendace(response, attendancePresentObj);
                } else {

                    Attendance saveAttendace = attendanceRepo.save(attendance);
                    mapAttendace(response, saveAttendace);
                }
            } else {
                response.setErrorMessage("Attendance Already Logged from your machine");
                Attendance attendancePresentObj = attendancePresent.get(0);
                mapAttendace(response, attendancePresentObj);
            }
        } catch (Exception e) {
            response.setErrorMessage(e.getMessage());
        }
        return response;
    }

    private String getFormattedDate() {
        Date date = new Date();
        String pattern = "dd-MM-yyyy"; // Example pattern, change as needed
        SimpleDateFormat sdf = new SimpleDateFormat(pattern);

        // Format the date
        String formattedDate = sdf.format(date);
        return formattedDate;
    }

    private AttendanceResponse mapAttendace(AttendanceResponse response, Attendance saveAttendace) {
        response.setAttendace(saveAttendace.getAttendace());
        response.setMarks(saveAttendace.getMarks());
        response.setRollNo(saveAttendace.getRollNo());
        response.setDate(saveAttendace.getDate());
        return response;
    }

    public List<Attendance> getAttendanceByRollAndDate(String rollNo, String date) {
        return attendanceRepo.findByRollNoAndDate(rollNo, date);
    }

    public List<Attendance> getByIp(String ip) {
        String formatedDate = getFormattedDate();
        return attendanceRepo.findByIpAndDate(ip, formatedDate);
    }

    public List<AttendanceResponse> getAllAtendaceForToday() {
        String formatedDate = getFormattedDate();
        return attendanceRepo.findByDateOrderByDateAscRollNoAsc(formatedDate).stream()
                .map(e -> mapAttendace(new AttendanceResponse(), e)).collect(Collectors.toList());

    }

}
