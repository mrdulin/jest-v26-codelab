import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export function Student(props) {
  const [studentRecord, setStudentRecord] = useState(props.stRecord);
  const [studentSubjects, setStudentSubjects] = useState<{ subjectName: string }[]>([]);
  function getStudentSubjects() {
    let apicalladdress = '/studentapi/GetStudentSubjects/' + studentRecord.studentNumber;
    axios.get(apicalladdress).then((result) => {
      setStudentSubjects(result.data);
    });
  }
  useEffect(() => {
    getStudentSubjects();
  }, [studentRecord]);

  return (
    <div>
      <div>{studentRecord.studentNumber}</div>
      <div>{studentSubjects[0]?.subjectName}</div>
    </div>
  );
}
