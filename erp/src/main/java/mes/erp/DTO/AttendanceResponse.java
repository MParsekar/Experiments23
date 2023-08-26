package mes.erp.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AttendanceResponse {
    String rollNo;
    String attendace;
    int marks;
    String date;
    String errorMessage;
}
