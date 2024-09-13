import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  const JSObject = filtered.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName =
      JSObject[key].firstName.charAt(0).toUpperCase() +
      JSObject[key].firstName.slice(1);
    JSObject[key].lastName =
      JSObject[key].lastName.charAt(0).toUpperCase() +
      JSObject[key].lastName.slice(1);
    return JSObject[key];
  });

  console.log(JSObject);
}
